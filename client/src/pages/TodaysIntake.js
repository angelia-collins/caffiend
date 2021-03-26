import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header.js";
import CoffeeName from "../components/CoffeeName";
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";
import ResetButton from "../components/ResetButton";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const TodaysIntakeComponent = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Header>RECORD SERVING</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">
            {month}/{date}/{year}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CoffeeName />
        </Col>
      </Row>
      <Row>
        <Col>
          <AmountInput/>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddButton />
        </Col>
        <Col>
          <ResetButton />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});
