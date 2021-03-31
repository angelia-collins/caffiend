import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";

import { withAuthenticationRequired } from "@auth0/auth0-react";

<<<<<<< HEAD:client/src/pages/Budget.js
// class App extends React.Component {
  
//   state = {
//     data: [12, 5, 6, 6, 9, 10],
//     width: 700,
//     height: 500,
//     // id: root
//   }}

export const BudgetComponent = () => {
=======
export const AppendBudgetReport = () => {
>>>>>>> 7ab8cce80edf3d824f4f487100888855f76aebf7:client/src/pages/InventoryReport.js
  return (
    <Container>
      <Row>
        <Col>
          <Header>inventory report</Header>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}></Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(AppendBudgetReport, {
  onRedirecting: () => <Loading />,
});
