import React from "react";
import { Container, Row, Col, Button, Label } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import CoffeeName from "../components/CoffeeName";
import RoastInput from "../components/RoastInput";
import AmountPurchasedInput from "../components/AmountPurchasedInput";
import AddButton from "../components/AddButton";
import ResetButton from "../components/ResetButton";
import PriceInput from "../components/PriceInput";
import Currency from "../components/SelectCurrencyInput";
import SelectUnitInput from "../components/SelectUnitInput";
import Axios from "axios";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AddNewComponent = () => {
  // const postToInventory = (e) => {
  //   e.preventDefault();
  //   Axios.post('/inventory', {
  //     brand: '',
  //     lastName: '',
  //     purchase_weight: '',
  //     purchase_price:  '',
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // };

  // function postToInventory(e) {
  //   e.preventDefault();
  //   let total = $('#total').val();
  //   $.ajax({
  //     method: "Post",
  //     url: `/api/inventory/${total}`,
  //   })

  return (
    <Container>
      <Row>
        <Col>
          <Header>stock inventory</Header>
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ size: 5, offset: 1 }}
          md={{ size: 6, offset: 2 }}
        >
          <CoffeeName />
        </Col>
        <Col sm={"4"} md={"2"}>
          <RoastInput />
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ size: 5, offset: 1 }}
          md={{ size: 6, offset: 2 }}
        >
        <AmountPurchasedInput />
        </Col>
        <Col sm={"4"} md={"2"}>
          <SelectUnitInput />
        </Col>
      </Row>
      <Row>
        {/* <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <PriceInput />
        </Col> */}
                <Col
          sm={{ size: 5, offset: 1 }}
          md={{ size: 6, offset: 2 }}
        >
       <PriceInput />
        </Col>
        <Col sm={"4"} md={"2"}>
      <Currency />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          xs={{ size: 6, offset: 1 }}
          sm={{ size: 3, offset: 3 }}
          md={{ size: 2, offset: 4 }}
        >
          <AddButton  text={"+ ADD"} />
        </Col>
        <Col xs={"5"} sm={{ size: 2 }} md={{ size: 2 }}>
          <ResetButton  />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});
