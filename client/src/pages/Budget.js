import React from "react";
import { Container, Row, Col } from "reactstrap";

import Loading from "../components/Loading";
import Header from '../components/Header';
import BarChart from '../components/BarChart';

import { withAuthenticationRequired } from "@auth0/auth0-react";

// class App extends React.Component {
  
//   state = {
//     data: [12, 5, 6, 6, 9, 10],
//     width: 700,
//     height: 500,
//     // id: root
//   }}

export const BudgetComponent = () => {
  return (
    <Container className="mb-5">
      <Header>Monthly Budget</Header>
      <BarChart />
      {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} /> */}
    </Container>
  );
};

export default withAuthenticationRequired(BudgetComponent, {
  onRedirecting: () => <Loading />,
});
