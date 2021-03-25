import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AddNewComponent = () => {
  return (
    <Container className="mb-5">
      <Header>Add New Coffee</Header>
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});