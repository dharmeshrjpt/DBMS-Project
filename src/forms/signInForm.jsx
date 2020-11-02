import React, { Component } from "react";

import axios from "axios";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = { name: " " };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      email: document.getElementById("email-address").value,
      password: document.getElementById("password").value,
    };
    axios
      .post("http://localhost:9000/signIn", data)
      .then((resp) => {
        console.log("SignIn Data send!!");
        alert(resp.data.message);
        if (resp.data.isLoggedIn) {
          this.setState({ name: resp.data.name });
          console.log(this.state.name);
          window.location.replace("http://localhost:3000/mainPage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <fieldset>
        <form
          onSubmit={this.handleSubmit}
          className="measure center shadow-1 tc mt6 "
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <legend className="f4 fw6 ph0  mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className=" pa2 input-reset ba bg-white  hover-black w-50"
              type="email"
              name="email-address"
              id="email-address"
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-white hover-bg-black hover-black w-50 "
              type="password"
              name="password"
              id="password"
            />
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer">
            <input type="checkbox" /> Remember me
          </label>
          <div>
            <input
              className="b ph3 pv2 input-reset  b--black bg-white grow pointer f6 dib "
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="http://localhost:3000/signUp"
              className="f6 link dim black db  "
            >
              Sign up
            </a>
            <a href="#0" className="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default SignInForm;
