import React from "react";
import './Header.css';

const Header = ({children}) => (
  <h1 className="text-center">
   {children}
  </h1>
);

export default Header;

