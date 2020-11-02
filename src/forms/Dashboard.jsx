import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";
import MainPage from "./mainPage";
import image from "../photos/pic2.jpg";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            backgroundImage: `url(${image})`,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <h1 className="tc">Welcome To Service</h1>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signIn" component={SignInForm} />
          <Route exact path="/signUp" component={SignUpForm} />
          <Route exact path="/mainPage" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default Dashboard;
