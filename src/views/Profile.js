import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0,  withAuthenticationRequired } from "@auth0/auth0-react";


export const ProfileComponent = () => {
  const { user } = useAuth0();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer {fill in with fresh bearer}");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://archfaktor.us.auth0.com/api/v2/users/auth0|62cf40705f61ec7a57a3dff3", requestOptions)
    .then(response => response.text())
    .then(result => {
      // console.log(result)
      const user_profile = JSON.parse(result);
      const user_metadata = result.user_metadata;
      console.log(user_metadata);
      console.log(user_profile);
      })
    .catch(error => console.log('error', error));
    
    // console.log(requestOptions.user_profile);


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
      
      <Row>
      <Col md>
          <p className="">{user.user_profile}TEXT</p>
        </Col>
      </Row>
       
      
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
