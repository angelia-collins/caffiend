import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';
import CoffeeName from '../components/CoffeeName';
import AmountInput from '../components/AmountInput';
import AddButton from '../components/AddButton';
import ResetButton from '../components/ResetButton';

import { withAuthenticationRequired } from "@auth0/auth0-react";


export const TodaysIntakeComponent = () => {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <Container className="mb-5">
      <Header>Today's Intake</Header>
      <p className="text-center">{month}/{date}/{year}</p>
      <CoffeeName />
      <AmountInput />
      <AddButton /> <ResetButton />
      </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});