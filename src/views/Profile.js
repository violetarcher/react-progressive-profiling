import React, { useEffect, useState }  from "react";
import { useAuth0,  withAuthenticationRequired } from "@auth0/auth0-react";

import { Container, Row, Col } from "reactstrap";
// import Highlight from 'react-highlight'
import Loading from "../components/Loading";


export const ProfileComponent = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [setUserMetadata] = useState(null);
   
   
   useEffect(() => {
    const getUserMetadata = async () => {
    const domain = "archfaktor.us.auth0.com";
    
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user", 
        // acr_values: 'http://schemas.openid.net/pape/policies/2007/06/multi-factor',
      });

      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

      const metadataResponse = await fetch(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { user_metadata } = await metadataResponse.json();

      setUserMetadata(user_metadata);
    } catch (e) {
      console.log(e.message);
    }
  };
  
  getUserMetadata();
}, [getAccessTokenSilently, setUserMetadata, user.sub]);

  return (
 
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
    
    <div className="container-claims">
      
      <Row>
        <mark>
         <div >
          <h3>ID Token</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          </div> 
        </mark>
      </Row>

      <br></br>

      {/* <Row>
        <mark>
         <div >
          <h3>Access Token</h3>
          <pre>{JSON.stringify(accessToken, null, 2)}</pre>
          </div> 
        </mark>
      </Row> */}

      <br></br>

{/* uncomment to render user Metadata from silend API call, must also uncommend issuer and scope in index.js */}
      {/* <Row>
        <mark>
        <div>
          <h3>User Metadata</h3>
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            "No user metadata defined"
          )}
        </div>
        </mark>
      </Row> */}
          
    </div>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});

