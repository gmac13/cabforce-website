import React, { Component } from "react";
import "../../App.css";
import { Redirect, Link } from "react-router-dom";
import cabforceLogo from "../../assets/cabforceLogo.png";
import hamburger from "../../assets/Hamburger_icon.png";
import { Modal, ModalFooter } from "react-bootstrap";
import footer from "../../assets/footer.png";
import swal from "sweetalert";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
  }

  yourProfile = () => {
    this.props.router.push({ pathname: "/profile" });
  };

  yourHome = () => {
    this.props.router.push({ pathname: "/" });
    // debugger
  };

  logout = () => {
    swal("Successfully Logged Out!", "Well done horse", "success");
    this.props.signOut();
    this.props.router.push({ pathname: "/" });
  };

  login = () => {
    this.props.router.push({ pathname: "/login" });
  };

  // back = () => {
  //   this.props.router.history.goBack();
  // };

  render() {
    const footerStyle = {
      backgroundColor: "#404041",
      fontSize: "20px",
      color: "white",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "8%",
      width: "100%"
    };

    function Footer({ children }) {
      return (
        <div>
          <div style={footerStyle}>{children}</div>
        </div>
      );
    }
    return (
      <div>
        <BrowserView device={isBrowser}>
          <div className="flexMenu">
            <div className="flexTemp">
              <img
                onClick={() => this.yourHome()}
                src={cabforceLogo}
                style={{
                  height: "23%",
                  width: "60%",
                  minHeight: "20px",
                  minWidth: "110px"
                }}
              />
            </div>
            <div className="flexSpace" />
            <div className="menuItems" onClick={() => this.yourHome()}>
              Home
            </div>

            {this.props.userToken ? (
              <div className="menuItems" onClick={() => this.yourProfile()}>
                Profile
            </div>
            ) : null}

            {this.props.userToken ? (
              <div className="menuItems" onClick={() => this.logout()}>
                Logout
              </div>
            ) : (
                <div className="menuItems" onClick={() => this.login()}>
                  Login
              </div>
              )}
          </div>
          {/* <div class="line" /> */}
          {/* <div className="footerOK" />
        <footer className="foot">
          <img src={footer} style={{ width: "100%", height: "150px" }} />
        </footer> */}
          {/* <Footer>
          <span className="span">@Cabforce Ltd. All rights reserved</span>
        </Footer> */}
        </BrowserView>

        <MobileView device={isMobile}>
          <div
            className="MobileHeader"
            onClick={() => this.props.toggleSidebar()}
          >
            <img src={hamburger} style={{ height: "7.5vw", width: "7.5vw" }} />
          </div>
        </MobileView>
      </div>
    );
  }
}
