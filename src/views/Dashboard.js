import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="tiles">
      <Card sx={{ maxWidth: 345, margin: 5 }}>
        <CardActionArea
          component={Link}
          to={{
            pathname: 'https://okta-2f9-dev-ed.develop.my.salesforce.com'
          }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CardContent>
            <img
              className="icons"
              src="https://auth0images.s3.us-east-2.amazonaws.com/salesforce-icon-2048x1434-jxt80iiu.png"
              alt={'salesforce logo'}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              href="google.com"
            >
              Salesforce
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 5 }}>
        <CardActionArea
          component={Link}
          to={{ pathname: 'http://localhost:4040' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CardContent>
            <img
              className="icons"
              src="https://auth0images.s3.us-east-2.amazonaws.com/next-js.svg"
              alt={'nextjs logo'}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              href="google.com"
            >
              Custom Web App
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 5 }}>
        <CardActionArea
          component={Link}
          to={{
            pathname:
              'https://archfaktor.us.auth0.com/samlp/K5LK8sweH1lefBDCH67ZooYlS5Nc9vLe'
          }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CardContent>
            <img
              className="icons"
              src="https://auth0images.s3.us-east-2.amazonaws.com/auth0logo.png"
              alt={'auth0byokta logo'}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              href="google.com"
            >
              SaaS App
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Dashboard;

// export default function MediaCard() {
//   return (
//     <div style={{ margin: "25%" }}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Salesforce
//           </Typography>

//         </CardContent>

//       </Card>
//     </div>
//   );
// }
