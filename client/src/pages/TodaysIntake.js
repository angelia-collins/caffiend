import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header.js";
import CoffeeName from "../components/CoffeeName";
import AmountUsedInput from "../components/AmountUsedInput";
import AddButton from "../components/AddButton";
import ResetButton from "../components/ResetButton";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const TodaysIntakeComponent = () => {
  // const [data, setData] = useState([])
  // const [formData, setFormData] = useState('')

  
  // const fetchGames = () => {
  //   fetch('http://localhost:3000/api/inventory', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setData(result.rows))
  //     .catch((err) => console.log('error'))
  // }

  // const handleAdd = () => {
  //   Array.from(document.querySelectorAll(["input", "select"])).forEach(
  //     (input) => (
        
  //         // TODO prefrom post request 
  //     ))}

  //     const saveConsumption = () => {
  //       fetch('http://localhost:3000/inventory', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           brand: formData,
  //           amount_consumed: formData, // Use your own property name / key
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((result) => setData(result.rows))
  //         .catch((err) => console.log('error'))
  //     }
          
        



  return (
    <Container>
      <Row>
        <Col>
          <Header>record serving</Header>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign: "center"}}>
        {new Date().toLocaleDateString()}
        {console.dir(new Date())}
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <CoffeeName />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <AmountUsedInput />
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
          <ResetButton />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(TodaysIntakeComponent, {
  onRedirecting: () => <Loading />,
});
