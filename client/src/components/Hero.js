import React, { useState } from "react";
import Logo from "../assets/Logos/Caffiend-logo.png";
import { Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
return (
  <div className="text-center hero my-5">
    <img
      src={Logo}
      alt="caffiend logo"
      style={{ maxWidth: "calc(100% - 10px)" }}
    />
    <p className="lead">What's brewing?</p>
    <Button
      id="qsLoginBtn"
      style={{ backgroundColor: "#210202", width: "100px"}}
      className="btn"
      onClick={() => loginWithRedirect()}
    >
      log in
    </Button>
  </div>
  )
};

export default Hero;
