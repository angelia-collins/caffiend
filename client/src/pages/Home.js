import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "../components/Hero";
import Header from '../components/Header';


export const Home = () => {
  const {
    isAuthenticated,
    user
  } = useAuth0();

  return (
    <Fragment>
      {!isAuthenticated && (
        <Hero />
      )}
      {isAuthenticated && (
        <div className="text-center hero my-5">
          <Header>Hello {user.name}!</Header> 
          {/* className="mb-4"> */}
        </div>
      )}
    </Fragment>
  );
};

export default Home;