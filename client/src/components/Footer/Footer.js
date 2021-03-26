import React from "react";
import { Container, Row, Col } from "reactstrap";

import './Footer.css';
import Logo from "../../assets/Logos/devil-bean-cream.png";

const Footer = () => (
    <Container className="themed-container footer text-center fixed-bottom" fluid={true}>
    <Row>
      <Col xs={{size: 'auto'}}>
      <img src={Logo} alt="caffiend logo" style={{height: "50px"}}/ >
      </Col>
    </Row>
    <Row>
      <Col xs={{size: 'auto'}}>
      &copy;{new Date().getFullYear()}{" "}
      </Col>
    </Row>
    </Container>
);

export default Footer;


