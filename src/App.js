// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
