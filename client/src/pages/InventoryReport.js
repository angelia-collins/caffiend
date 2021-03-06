import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from '../components/Header/Header';
import BarChart from '../components/BarChart';

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AppendBudgetReport = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>inventory report</Header>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}></Col>
        <BarChart />
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AppendBudgetReport, {
  onRedirecting: () => <Loading />,
});
