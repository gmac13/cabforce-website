import React, { Component } from "react";
import "./App.css";
import { Redirect, Link } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppContainer from "./AppContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="AppFont">
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    );
  }
}
