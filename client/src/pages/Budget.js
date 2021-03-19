import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const BudgetComponent = () => {
  return (
    <Container className="mb-5">
      <h1>Monthly Budget</h1>
    </Container>
  );
};

export default withAuthenticationRequired(BudgetComponent, {
  onRedirecting: () => <Loading />,
});