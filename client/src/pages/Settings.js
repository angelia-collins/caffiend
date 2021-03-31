import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import OptionSetting from "../components/OptionSetting";
import {Input} from 'reactstrap';
// import CoffeeName from "../components/CoffeeName";
// import AmountInput from "../components/AmountInput";
// import AddButton from "../components/AddButton";
// import ResetButton from "../components/ResetButton";
// import PriceInput from "../components/PriceInput";

import { withAuthenticationRequired } from "@auth0/auth0-react";

const data = [
  {
    title: "BUDGET OPTIONS",
    option1: "SELECT MONTH:",
    input1: () => {
        return (
         
            <Input
          type="curency"
          name="allocated_amount"
          id="exampleEmail"
          placeholder="$" />
        
        );
    },
    option2: "INPUT ALLOTMENT",
  },
  {
    title: "MANAGE INVENTROY",
    option1: "REMOVE BRAND FROM INVENTORY"
  },
  { title: "CONTROL CONSUMPTION", option1: "", option2: "" },
];

export const AppendSettingsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>SETTINGS</Header>
        </Col>
      </Row>
      {data.map((info) => (
        <Row className="mt-3">
          <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
            <OptionSetting {...info} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default withAuthenticationRequired(AppendSettingsPage, {
  onRedirecting: () => <Loading />,
});
