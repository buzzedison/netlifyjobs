import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import MainContent from "./pages/MainContent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="AppSides" />
          <div className="SwitchPage_Item">
            <Route exact path="/" component={MainContent} />
          </div>
          <div className="AppForm">
            <div className="SwitchPage">
              <NavLink
                to="/signin"
                activeclassName="SwitchPage_ItemActive"
                className="SwitchPage_Item"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/"
                className="SwitchPage_Item"
                activeClassName="SwitchPage_ItemActive"
              >
                Sign up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/signin"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign in
              </NavLink>
              or
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link"
              >
                Sign up
              </NavLink>
            </div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
