import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "../components/Hero";
import Header from "../components/Header/Header";
import Logo from "../assets/Logos/Caffiend-logo.png";



export const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
   
    <Fragment>
      {!isAuthenticated && <Hero />}
      {isAuthenticated && (
        
          <div className="text-center hero my-5">
            <img
              src={Logo}
              alt="caffiend logo"
              style={{ maxWidth: "calc(100% - 10px)" }}
            />
            <Header>welcome {user.given_name.toLocaleLowerCase()}</Header>
          </div>
       
      )}
    </Fragment>

  );
};

export default Home;
