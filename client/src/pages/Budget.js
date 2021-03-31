import React from "react";
import { Container, Row, Col } from "reactstrap";

import Loading from "../components/Loading";
import Header from "../components/Header/Header";

import { withAuthenticationRequired } from "@auth0/auth0-react";

// class App extends React.Component {
  
//   state = {
//     data: [12, 5, 6, 6, 9, 10],
//     width: 700,
//     height: 500,
//     // id: root
//   }}

export const BudgetComponent = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
        <Header>Monthly Budget</Header>
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(BudgetComponent, {
  onRedirecting: () => <Loading />,
});
