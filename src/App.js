import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import GamesList from "./components/games/GamesList";
import GameDetails from "./components/games/GameDetails";
import LogoutPage from "./components/logout/LogoutPage";
import "./App.css";
import Instructions from "./containers/Instructions";
import TopBar from "./components/layout/TopBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/games" component={GamesList} />
          <Route exact path="/games/:id" component={Instructions} />
          <Route exact path="/" render={() => <Redirect to="/games" />} />
        </div>
      </Router>
    );
  }
}
export default App;
