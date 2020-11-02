import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import image from "../photos/pic2.jpg";
class MainPage extends Component {
  state = {
    to: "",
    from: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      fromVal: this.state.from,
      toVal: this.state.to,
    };
    console.log(data);
    axios
      .post("http://localhost:9000/mainPage", data)
      .then((resp) => {
        console.log("Data send!!");
        if (resp.data.isAvailable) {
          alert("Buses are available");
        } else {
          alert("buses are not available");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
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
        <div>
          <header className="sans-serif">
            <div
              className="cover bg-left bg-center-l"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <div className="bg-black-80 pb5 pb6-m pb7-l">
                <nav className="dt w-100 mw8 center ">
                  <div className="dtc v-mid tr pa3">
                    <a
                      className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                      href="/"
                    >
                      About
                    </a>

                    <a className="f4 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3">
                      Dharmesh kumar
                    </a>
                    <a
                      className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                      href="http://localhost:3000/signIn"
                    >
                      Log Out
                    </a>
                  </div>
                </nav>
                <div className=" mt6  tc center">
                  <label
                    className="f3   white tc  "
                    style={{
                      wordWrap: "break-word",
                    }}
                  >
                    BOOK YOUR TICKETS{" "}
                  </label>

                  <div className="container   tc ">
                    <form className="  " onSubmit={this.handleSubmit}>
                      <input
                        className="col col-lg-2 pv2  grow pointer"
                        style={{ border: "1px solid black" }}
                        type="text"
                        placeholder="From"
                        id="From_value"
                        onChange={(e) =>
                          this.setState({ from: e.target.value })
                        }
                      />
                      <input
                        className="col col-lg-2 grow pointer  pv2 "
                        type="text"
                        name="To"
                        style={{ border: "1px solid black" }}
                        placeholder="to"
                        id=" To_value"
                        onChange={(e) => this.setState({ to: e.target.value })}
                      />
                      <input
                        className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f7 "
                        type="submit"
                        value="Search buses"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default MainPage;
