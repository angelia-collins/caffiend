import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import CoffeeName from "../components/CoffeeName";
// import RoastInput from '../components/RoastInput';
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";
import ResetButton from "../components/ResetButton";
import PriceInput from "../components/PriceInput";
import API from "../utils/API";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AddNewComponent = () => {
  const [coffeeName, setCoffeeName] = useState('');
  const [amt, setAmt] = useState(0);
  const [price, setPrice] = useState(0);

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
    /*
    API.saveInventory()
      .then(res => 
        console.log(res)
      )
      .catch(err => console.log(err));
    */
    
        if (coffeeName && amt && price) {
          API.saveInventory({
            brand: coffeeName
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    
  };

  return (
    <Container>
      <Row>
        <Col>
          <Header>STOCK INVENTORY</Header>
        </Col>
      </Row>
      <Row className="mt-4">
      <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} >
          <CoffeeName handleName= { handleName } />
        </Col>
      </Row>
      <Row className="mt-2">
      <Col sm={{ size: 8, offset: 2 }}md={{ size: 8, offset: 2 }} >
          <AmountInput handleAmt= { handleAmt }/>
        </Col>
      </Row>
      <Row className="mt-2">
      <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} >
          <PriceInput handlePrice = { handlePrice }/>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={{ size: 6, offset: 1 }} sm={{ size: 3, offset: 3 }} md={{ size: 2, offset: 4 }}>
          <AddButton text={"+ ADD"} handleBtnClick={ handleBtnClick } />
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
