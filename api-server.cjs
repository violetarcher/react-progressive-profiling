const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { auth } = require('express-oauth2-jwt-bearer');
const authConfig = require('./src/auth_config.json');
require('dotenv').config();

const { CredentialsMethod, OpenFgaClient } = require('@openfga/sdk');

const fgaClient = new OpenFgaClient({
  apiUrl: 'https://api.us1.fga.dev',
  storeId: process.env.FGA_STORE_ID,
  authorizationModelId: process.env.FGA_MODEL_ID,
  credentials: {
    method: CredentialsMethod.ClientCredentials,
    config: {
      apiTokenIssuer: 'auth.fga.dev',
      apiAudience: 'https://api.us1.fga.dev/',
      clientId: process.env.FGA_CLIENT_ID,
      clientSecret: process.env.FGA_CLIENT_SECRET
    }
  }
});

async function checkAuthorization() {
  try {
    const { allowed } = await fgaClient.check({
      user: 'user:caitlyn',
      relation: 'member',
      object: 'group:accounting'
    });

    if (allowed) {
      console.log('User is allowed to access the resource.');
      return allowed;
    } else {
      console.log('User is NOT allowed to access the resource.');
    }
  } catch (error) {
    console.error('Error checking authorization:', error);
  }
}
const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === 'YOUR_API_IDENTIFIER'
) {
  console.log(
    'Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values'
  );

  process.exit();
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

// app.get('/api/external', checkAuthorization, (req, res) => {
//   res.send({
//     msg: 'Your access token was successfuldly validated!'
//   });
// });

app.get('/api/external', async (req, res) => {
  try {
    // Call the checkAuthorization function and store the result
    const allowed = await checkAuthorization();

    // Send the result to the client as a message
    if (allowed) {
      res.send({
        message: 'User is allowed to access the resource.'
      });
    } else {
      res.send({
        message: 'User is NOT allowed to access the resource.'
      });
    }
  } catch (error) {
    // Handle any errors during the process
    res.status(500).send({
      message: 'An error occurred while checking authorization.',
      error: error.message
    });
  }
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
