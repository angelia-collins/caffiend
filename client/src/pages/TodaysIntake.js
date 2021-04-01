import React, { useState, useEffect } from "react";
import { Container, Row, Col, Fade } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header.js";
import CoffeeName from "../components/CoffeeName";
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";
// import ResetButton from "../components/ResetButton";
import API from "../utils/API";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const TodaysIntakeComponent = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const [coffeeName, setCoffeeName] = useState('');
  const [amt, setAmt] = useState(0);
  const [brands, setBrands] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState({});

  const handleName = event => {
    console.log(event);
    setCoffeeName(event);
    var found = inventory.find(function(c) {
      if(c.brand === event) {
        return true;
      }
    });
    if (found) {setSelectedCoffee(found)}
    console.log(found);
  };

  const handleAmt = event => {
    setAmt(event);

  };

  useEffect(() => {
    API.getInventory()
      .then(res => {
        let arr = [];
        for (var i = 0; i < res.data.length; i++) {
          arr.push(res.data[i].brand);
        }
        setBrands(arr);
        setInventory(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const updateCoffees = e => {
    API.getInventory()
    .then(res => {
      let arr = [];
      for (var i = 0; i < res.data.length; i++) {
        arr.push(res.data[i].brand);
      }
      setBrands(arr);
      setInventory(res.data);
    })
    .catch(err => console.log(err));
  };

  const handleAdd = event => {
    var newWeight = selectedCoffee.purchase_weight - amt;
    if (coffeeName && amt) {
      API.updateInventory({
        brand: coffeeName,
        purchase_weight: newWeight
      })
        .then(res => {
          updateCoffees();
        })
        .catch(err => console.log(err));
    }
  };

  const [fadeIn, setFadeIn] = useState(false);

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
      <Row className="justify-content-center">
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <CoffeeName from="intake" handleName = { handleName }  coffees={ brands } />
        </Col>
      </Row>
      {selectedCoffee && (
        <Row className="mt-2">
          <Col sm={{ size: 8, offset: 2 }}md={{ size: 8, offset: 2 }} >
            <p className="text-center">
            There is <b>{ selectedCoffee.purchase_weight }</b> oz. left of { coffeeName }.
            </p>
          </Col>
        </Row>
      )}
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
          <AddButton text={"+ ADD"} handleBtnClick={ handleAdd } />
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
</Col>
*/