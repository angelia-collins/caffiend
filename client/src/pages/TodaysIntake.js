import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const TodaysIntakeComponent = () => {
  return (
    <Container className="mb-5">
      <Header>Today's Intake</Header>
    </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});