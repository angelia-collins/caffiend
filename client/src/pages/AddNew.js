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
      <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} >
          <CoffeeName />
        </Col>
      </Row>
      <Row className="mt-2">
      <Col sm={{ size: 8, offset: 2 }}md={{ size: 8, offset: 2 }} >
          <AmountInput placeholder={"Coffee Brand"} />
        </Col>
      </Row>
      <Row className="mt-2">
      <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} >
          <PriceInput />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={{ size: 6, offset: 1 }} sm={{ size: 3, offset: 3 }} md={{ size: 2, offset: 4 }}>
          <AddButton text={"+ ADD"}/>
        </Col>
        <Col xs={"5"} sm={{ size: 2}} md={{ size: 2}}>
          <ResetButton />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});
