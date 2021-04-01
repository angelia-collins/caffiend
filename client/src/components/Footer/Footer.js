import React from "react";
import { Container, Row, Col } from "reactstrap";
import './Footer.css';
import Logo from "../../assets/Logos/Caffiend-logo-cream.png";

const Footer = () => (
    <Container className="themed-container footer text-center fixed-bottom" fluid={true}>
    <Row>
      <Col>
      <img src={Logo} alt="caffiend logo" style={{height: "36px"}}/ >
      </Col>
    </Row>
    <Row>
      <Col>
      <p st>&copy;{new Date().getFullYear()}{" "}</p>
      </Col>
    </Row>
    </Container>
);

export default Footer;


