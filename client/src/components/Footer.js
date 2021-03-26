import React from "react";
import './Footer.css';
import Logo from "../assets/Caffiened-logo.png";

const Footer = () => (
  <footer className="text-center fixed-bottom">
    <p>
    <img src={Logo} alt="caffiend logo"/> ©2021
    </p>
  </footer>
);

export default Footer;
