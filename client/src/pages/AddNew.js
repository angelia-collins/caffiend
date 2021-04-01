import React, { useState } from "react";
import { Container, Row, Col, Fade } from "reactstrap";
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
  const [coffeeName, setCoffeeName] = useState('');
  const [amt, setAmt] = useState(0);
  const [price, setPrice] = useState(0);

  const [fadeIn, setFadeIn] = useState(false);

  const handleName = event => {
    setCoffeeName(event);
  };

  const handleAmt = event => {
    setAmt(event);
  };

  const handlePrice = event => {
    setPrice(event);
  };

  const handleBtnClick = event => {
    // console.log(coffeeName, amt, price);
    
    if (coffeeName && amt && price) {
      API.saveInventory({
        brand: coffeeName,
        purchase_weight: amt,
        purchase_price: price
      })
        .then(res => {
          console.log(res);
          setFadeIn(!fadeIn);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Header>stock inventory</Header>
        </Col>
      </Row>
      <Row className="mt-4">
      <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} >
          <CoffeeName from="inventory" handleName= { handleName } />
        </Col>
      </Row>
      <Row className="mt-2">
      <Col sm={{ size: 8, offset: 2 }}md={{ size: 8, offset: 2 }} >
          <AmountInput filler="Weight" handleAmt= { handleAmt }/>
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
      <Row className="mt-2">
        <Col sm={{ size: 8, offset: 2 }}md={{ size: 8, offset: 2 }} >
          <Fade in={fadeIn} tag="h6" className="mt-3 text-center">
             Success!
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AddNewComponent, {
  onRedirecting: () => <Loading />,
});

/*
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
*/