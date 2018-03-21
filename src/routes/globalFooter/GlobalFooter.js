import React, { Component } from "react";
import "../../App.css";
import { Redirect, Link } from "react-router-dom";
import cabforceLogo from "../../assets/cabforceLogo.png";

import { Modal, ModalFooter } from "react-bootstrap";

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
  }
  yourProfile = () => {
    this.props.router.history.push({ pathname: "/profile" });
    // <Link to="/profile" />;
  };

  yourHome = () => {
    this.props.router.history.push({ pathname: "/home" });
    // <Link to="/home" />;
  };

  yourHelp = () => {
    this.props.router.history.push({ pathname: "/help" });
  };

  logout = () => {
    this.props.signOut();
  };

  render() {
    // const footerStyle = {
    //   backgroundColor: "#404041",
    //   fontSize: "20px",
    //   color: "white",
    //   borderTop: "1px solid #E7E7E7",
    //   textAlign: "center",
    //   padding: "20px",
    //   position: "fixed",
    //   left: "0",
    //   bottom: "0",
    //   height: "8%",
    //   width: "100%"
    // };


    return (
      // <header className="Header">
      //   <div className="HeaderTitle">
      //     <div className="TitleText">
      //       <h2>cabforce</h2>
      //     </div>
      //   </div>
      //   <div className="NavBar">
      //     <div className="HomeProfile">
      //   <div className="HomeText" onClick={() => this.yourHome()}>
      //     <h4>Home </h4>
      //   </div>
      //   <div className="ProfileText" onClick={() => this.yourProfile()}>
      //     <h4> Profile </h4>
      //   </div>
      //   <div className="ProfileText" onClick={() => this.yourHelp()}>
      //     <h4> Help </h4>
      //   </div>
      // </div>
      // <div className="ProfileText" onClick={() => this.logout()}>
      //   <h4> Log Out </h4>
      // </div>
      //   </div>
      // </header>

      <div className="theFooter">
        <div className="footerDiv">
          #Destination Driven

        </div>
        {/* <div className="iconDiv">
          <img src={twitter} height={'21vh'} width={'21vw'} className="icon1" />
          <img src={facebook} height={'21vh'} width={'21vw'} style={{ padding: '2%' }} />
          <img src={link} height={'21vh'} width={'21vw'} style={{ padding: '3%' }} />
        </div> */}
      </div>
    );
  }
}
