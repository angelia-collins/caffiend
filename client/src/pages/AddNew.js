import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import CoffeeName from "../components/CoffeeName";
// import RoastInput from '../components/RoastInput';
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";
import ResetButton from "../components/ResetButton";
import PriceInput from "../components/PriceInput";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AddNewComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>STOCK INVENTORY</Header>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-8 offset-md-2">
          <CoffeeName />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="col-md-8 offset-md-2">
          <AmountInput />
        </Col>
      </Row>
      <Row className="mt-2">
      <Col className="col-md-8 offset-md-2">
          <PriceInput />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="col-md-3 offset-md-3">
          <AddButton />
        </Col>
        <Col className="col-md-3">
          <ResetButton />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});
