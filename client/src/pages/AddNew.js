import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';
import CoffeeName from '../components/CoffeeName';
import AmountInput from '../components/AmountInput';
import AddButton from '../components/AddButton';
import ResetButton from '../components/ResetButton';
import PriceInput from '../components/PriceInput';

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AddNewComponent = () => {
  return (
    <Container className="mb-5">
      <Header>Add New Coffee</Header>
      <CoffeeName />
      <AmountInput />
      <PriceInput />
      <AddButton /> <ResetButton />
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});