import React, { Component } from "react";
import axios from "axios";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("working");
    let data = {
      name: document.getElementById("signUp-name").value,
      email: document.getElementById("signUp-email-address").value,
      mobile: document.getElementById("signUp-mobileNumber").value,
      password: document.getElementById("signUp-password").value,
    };

    axios
      .post("http://localhost:9000/signUp", data)
      .then((resp) => {
        console.log("data send");
        alert(resp.data.message);
        if (resp.data.isReg) {
          window.location.replace("http://localhost:3000/signIn");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="pa4 black-80">
        <form
          onSubmit={this.handleSubmit}
          className="measure center shadow-1 tc mt4   "
          style={{ backgroundColor: "#f3f3f3" }}
          // action="sign-up_submit"
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6  ">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f4" htmlFor="email-address">
                Email address
              </label>
              <input
                className="pa2 input-reset ba bg-white  "
                type="email"
                name="email-address"
                id="signUp-email-address"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mt3">
              <label className="db fw4  lh-copy f4" htmlFor="name">
                Name
              </label>
              <input
                className=" pa2 input-reset ba "
                type="name"
                name="name"
                id="signUp-name"
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f4" htmlFor="mobileNumber">
                Mobile No
              </label>
              <input
                className=" pa2 input-reset ba "
                type="mobileNumber"
                name="mobileNumber"
                id="signUp-mobileNumber"
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba "
                type="password"
                name="password"
                id="signUp-password"
              />
            </div>
          </fieldset>
          <div className="mt3">
            <button
              className="b ph3 pv2 input-reset ba b--black  grow pointer f6 md2"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <label className="db fw4 lh-copy f5 pa2" htmlFor="AlreadyLogIn">
            {" "}
            Already Registered!{" "}
            <a href="http://localhost:3000/signIn">SignIn</a>
          </label>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
