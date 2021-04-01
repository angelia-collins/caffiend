import React, { useState } from "react";
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

  const [coffeeName, setCoffeeName] = useState('');
  const [amt, setAmt] = useState(0);

  const handleName = event => {
    setCoffeeName(event);
  };

  const handleAmt = event => {
    setAmt(event);
  };

  const clear = event => {
    setCoffeeName('');
    setAmt(0);
    console.log('coffeeName, amt');
  };

  return (
    <Container>
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
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <CoffeeName handleName = { handleName } />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <AmountInput filler="Amount Consumed" handleAmt= { handleAmt } />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          xs={{ size: 6, offset: 3 }}
          sm={{ size: 4, offset: 4 }}
          md={{ size: 2, offset: 5 }}
        >
          <AddButton text={"+ ADD"} />
        </Col>
        
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});

/*

xs={{ size: 6, offset: 1 }}
sm={{ size: 3, offset: 3 }}
md={{ size: 2, offset: 4 }}

<Col xs={"5"} sm={{ size: 2 }} md={{ size: 2 }}>
          <ResetButton onClick={ clear }/>
        </Col> */