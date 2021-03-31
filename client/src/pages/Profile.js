import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>
            Welcome <br />
            {user.name}
          </h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
