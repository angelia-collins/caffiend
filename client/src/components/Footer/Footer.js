import React from "react";
import './Footer.css';
import Logo from "../../assets/Caffiened-logo.png";

const Footer = () => (
  <footer className="text-center fixed-bottom">
    <p>
    <img src={Logo} alt="caffiend logo"/> &copy;{new Date().getFullYear()}{" "}
    </p>
  </footer>
);

export default Footer;


