import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import HelpDetails from "./help/HelpDetails";
import TripView from "./help/TripView";
import Home from "./home/Home";
import PrivatePolicy from "./policy/PrivatePolicy";
import CookiePolicy from "./policy/CookiePolicy"


import Sidebar from "react-sidebar";
import SidebarComponent from "../components/sidebar/SidebarComponent";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-112766582-1');

export default class AppDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: this.props.sidebar
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sidebarOpen: nextProps.sidebar
    });
  }

  sidebar(props) {
    return (
      <SidebarComponent
        {...props}
        toggleSidebar={this.props.toggleSidebar}
        userToken={this.props.userToken}
        signOut={this.props.signOut}
      />
    );
  }

  tracker = () => {
    ReactGA.pageview(window.location.pathname)
  }

  render() {


    return (
      <BrowserRouter component={this.tracker()}>

        <Switch>
          <Route
            path="/login"

            exact
            render={props =>
              !this.props.userToken ? (
                <Sidebar
                  sidebar={this.sidebar(props)}
                  open={this.state.sidebarOpen}
                  touchHandleWidth={0}
                  onSetOpen={() => this.props.toggleSidebar()}
                  styles={{
                    sidebar: {
                      width: "75vw",
                      backgroundColor: "#353839"
                    }
                  }}
                >
                  <Login
                    {...props}
                    signIn={this.props.signIn}
                    toggleSidebar={this.props.toggleSidebar}
                    sidebar={this.props.sidebar}
                  />
                </Sidebar>
              ) : this.props.lastPath ? (
                <Redirect to={this.props.lastPath} />
              ) : (
                    <Redirect to={"/"} />
                  )}
          />
          <Route
            path="/profile"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <Profile
                  {...props}
                  userToken={this.props.userToken}
                  userProfile={this.props.userProfile}
                  getUserProfile={this.props.getUserProfile}
                  signOut={this.props.signOut}
                  load={this.props.load}
                  updatePassword={this.props.updatePassword}
                  isUserProfileUpdated={this.props.isUserProfileUpdated}
                  updateNames={this.props.updateNames}
                  updateEmail={this.props.updateEmail}
                  getOrderHistory={this.props.getOrderHistory}
                  orders={this.props.orders}
                  addTripObject={this.props.addTripObject}
                  setLastPath={this.props.setLastPath}
                  toggleSidebar={this.props.toggleSidebar}
                  sidebar={this.props.sidebar}
                />
              </Sidebar>
            )}
          />
          <Route
            path="/help/details"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <HelpDetails
                  {...props}
                  signOut={this.props.signOut}
                  userProfile={this.props.userProfile}
                  getUserProfile={this.props.getUserProfile}
                  getOrderHistory={this.props.getOrderHistory}
                  orders={this.props.orders}
                  userToken={this.props.userToken}
                  setLastPath={this.props.setLastPath}
                  helpDetailsObj={this.props.helpDetailsObj}
                  topicObj={this.props.topicObj}
                  saveHelpState={this.props.saveHelpState}
                  addTripObject={this.props.addTripObject}
                  tripObj={this.props.tripObj}
                  load={this.props.load}
                  clearTripObject={this.props.clearTripObject}
                  lastPath={this.props.lastPath}
                  toggleSidebar={this.props.toggleSidebar}
                  sidebar={this.props.sidebar}
                  addHelpDetailObject={this.props.addHelpDetailObject}
                />
              </Sidebar>
            )}
          />
          <Route
            path="/help/details/privatePolicy"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <PrivatePolicy
                  {...props}
                />
              </Sidebar>
            )}
          />
          <Route
            path="/help/details/cookiePolicy"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <CookiePolicy
                  {...props}
                />
              </Sidebar>
            )}
          />
          <Route
            path="/help/trip"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <TripView
                  {...props}
                  signOut={this.props.signOut}
                  userProfile={this.props.userProfile}
                  getUserProfile={this.props.getUserProfile}
                  getOrderHistory={this.props.getOrderHistory}
                  orders={this.props.orders}
                  userToken={this.props.userToken}
                  setLastPath={this.props.setLastPath}
                  tripObj={this.props.tripObj}
                  addHelpDetailObject={this.props.addHelpDetailObject}
                  saveHelpState={this.props.saveHelpState}
                  lastPath={this.props.lastPath}
                  toggleSidebar={this.props.toggleSidebar}
                  sidebar={this.props.sidebar}
                />
              </Sidebar>
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <Sidebar
                sidebar={this.sidebar(props)}
                open={this.state.sidebarOpen}
                touchHandleWidth={0}
                onSetOpen={() => this.props.toggleSidebar()}
                styles={{
                  sidebar: {
                    width: "75vw",
                    backgroundColor: "#353839"
                  }
                }}
              >
                <Home
                  {...props}
                  userProfile={this.props.userProfile}
                  signOut={this.props.signOut}
                  userToken={this.props.userToken}
                  userProfile={this.props.userProfile}
                  getUserProfile={this.props.getUserProfile}
                  setLastPath={this.props.setLastPath}
                  addHelpDetailObject={this.props.addHelpDetailObject}
                  addTopicObject={this.props.addTopicObject}
                  clearTripObject={this.props.clearTripObject}
                  toggleSidebar={this.props.toggleSidebar}
                  sidebar={this.props.sidebar}
                />
              </Sidebar>
            )}
          />
        </Switch>

      </BrowserRouter>
    );
  }
}
