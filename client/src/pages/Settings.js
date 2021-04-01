import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import OptionSetting from "../components/OptionSetting";



import { withAuthenticationRequired } from "@auth0/auth0-react";

const data = [
  {
    title: "budget options",
    options: ["select month:", "input allotment"],
    inputType: 1,
  },
  {
    title: "manage inventory",
    options: ["delete brand"],
  },
  { title: "control consumption", options: ["set alerts"] },
];

export const AppendSettingsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>settings</Header>
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


// <Input
// type="curency"
// name="allocated_amount"
// id="exampleEmail"
// placeholder="$"
// />