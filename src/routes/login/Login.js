import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import "./Login.css";
import { Redirect, Link } from "react-router-dom";
import cabforceLogo from "../../assets/cabforceLogo.png";
import Typist from "react-typist";

import GlobalHeader from "../globalHeader/GlobalHeader.js";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-112766582-1');

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMobile: null,
      password: null,
      errorTextPhoneNo: null,
      errorTextPassword: null
    };
  }

  login = async () => {

    const { signIn } = this.props;
    const { userMobile, password } = this.state;

    if (!userMobile && !password) {
      this.setState({
        errorTextPhoneNo: "This field cannot be empty",
        errorTextPassword: "This field cannot be empty"
      });
    } else if (!password) {
      this.setState({
        errorTextPassword: "This field cannot be empty"
      });
    } else if (!userMobile) {
      this.setState({
        errorTextPhoneNo: "This field cannot be empty"
      });
    } else {
      if (signIn) {
        await signIn(userMobile, password);
        if (this.props.userToken != null) {
          this.props.history.push({ pathname: this.props.lastPath });
          ReactGA.event({
            category: 'User',
            action: 'Logged In'
          });
        }

      } else {
        alert("Not a valid phone number");
      }
    }
  };

  render() {
    return (
      <div>
        <GlobalHeader
          router={this.props.history}
          signOut={this.props.signOut}
          userToken={this.props.userToken}
          openSidebar={this.props.openSidebar}
          toggleSidebar={this.props.toggleSidebar}
          sidebar={this.props.sidebar}
        />
        <div className="SearchDiv3">
          <Typist>Login for more Help</Typist>
        </div>
        <div className="flexArea">
          <div className="title">
            <MobileView device={isMobile}>
              <img src={cabforceLogo} style={{ height: "5%", width: "55%" }} />
            </MobileView>

            <div className="views">
              <form>
                <MuiThemeProvider>
                  <TextField
                    hintText="Mobile Number"
                    name="phone-number"
                    style={{ marginTop: "10%" }}
                    onChange={event => {
                      this.setState({ userMobile: event.target.value });
                    }}
                    errorText={this.state.errorTextPhoneNo}
                  />

                  <TextField
                    hintText="Password"
                    type="password"
                    style={{ marginTop: "10%" }}
                    onChange={event => {
                      this.setState({ password: event.target.value });
                    }}
                    errorText={this.state.errorTextPassword}
                  />
                </MuiThemeProvider>
              </form>

              <button
                onClick={() => this.login()}
                className="ChangePasswordButton1"
              >
                Login
              </button>
            </div>
            <div className="ltd">
              <p> @Cabforce Ltd. All rights reserved 2018</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
