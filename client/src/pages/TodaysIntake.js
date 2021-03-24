import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';

import { withAuthenticationRequired } from "@auth0/auth0-react";


export const TodaysIntakeComponent = () => {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <Container className="mb-5">
      <Header>Today's Intake</Header>
      <p>{month}/{date}/{year}</p>

      </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});