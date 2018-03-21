import React, { Component } from "react";
import "./Sidebar.css";
import cabforceLogo from "../../assets/cabforceLogo.png";

import swal from "sweetalert";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  yourProfile = () => {
    this.props.history.push({ pathname: "/profile" });
    this.props.toggleSidebar()
  };

  yourHome = () => {
    this.props.history.push({ pathname: "/" });
    this.props.toggleSidebar()
  };

  logout = () => {
    swal("Successfully Logged Out!", "Well done horse", "success");
    this.props.toggleSidebar()
    this.props.signOut();
    this.props.history.push({ pathname: "/" });
  };

  login = () => {
    this.props.history.push({ pathname: "/login" });
    this.props.toggleSidebar()
  };

  render() {
    return (
      <div className="Sidebar">
        <div className="SidebarIconDiv">
          <img
            src={cabforceLogo}
            style={{
              height: "23%",
              width: "60%",
              minHeight: "20px",
              minWidth: "110px",
              maxHeight: "40px",
              maxWidth: "130px",
            }}
          />
        </div>
        <div className="SidebarListDiv">
          <div className="SidebarList">
            <div className="SidebarHomeDiv" onClick={() => this.yourHome()}>Home</div>
            {this.props.userToken ?
              <div className="SidebarProfileDiv" onClick={() => this.yourProfile()}>Profile</div>
              : null}
            {this.props.userToken ?
              <div className="SidebarLoginDiv" onClick={() => this.logout()}>Log out</div>
              : <div className="SidebarLoginDiv" onClick={() => this.login()}>Log in</div>}
          </div>
        </div>
        <div className="SidebarSlogan">#DestinationDriven</div>
      </div>
    );
  }
}
