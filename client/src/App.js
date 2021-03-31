import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import Profile from "./pages/Profile";
import Budget from "./pages/Budget";
import TodaysIntake from "./pages/TodaysIntake";
import Inventory from "./pages/Inventory";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-new" component={AddNew} />
            <Route path="/budget" component={Budget} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/profile" component={Profile} />
            <Route path="/todays-intake" component={TodaysIntake} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
