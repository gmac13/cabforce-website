import React, { Component } from "react";
import "./Help.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TextField from "material-ui/TextField";

import GlobalHeader from "../globalHeader/GlobalHeader.js";
import { topics } from "./topics";
import { tripTopics } from "./tripTopics";

import balloon from "../../assets/icons8-hot_air_balloon.png";
import swal from "sweetalert";

import TripItem from "../trips/TripItem";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

let count = 0;

export default class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFields: false,
      formQuestion: "",
      formComplaint: "",
      formName: "",
      formEmail: "",
      formTextInputObject: {}
    };
  }

  componentWillMount() {
    if (this.props.userToken) {
      this.props.getOrderHistory(this.props.userToken);

      if (this.props.lastPath === "/profile") {
        this.props.clearTripObject();
      }
    }

    if (!this.props.userToken) {
      this.props.setLastPath(this.props.history.location.pathname);
    }
  }

  componentDidMount() {
    if (
      this.props.userProfile &&
      this.props.userProfile.email &&
      this.props.userProfile.firstName &&
      this.props.userProfile.lastName
    ) {
      this.setState({
        formName: `${this.props.userProfile.firstName} ${this.props.userProfile
          .lastName}`,
        formEmail: this.props.userProfile.email
      });
    }

    window.scrollTo(0, 0);
  }

  policyLink = () => {
    this.props.history.push({ pathname: "/help/details/privatePolicy" })
  }

  cookieLink = () => {
    this.props.history.push({ pathname: "/help/details/cookiePolicy" })
  }

  // help text
  renderHelpTextDiv(text) {

    if (text) {

      return (
        <div>
          <div className="HelpDetailsTextDiv">
            <div className="HelpDetailsText">{text}</div>
          </div>
          <div className="Policy">
            <div className="PrivatePolicy" onClick={() => this.policyLink()}> Private Policy</div>
            <div className="Cookie" onClick={() => this.cookieLink()} > Cookie Policy</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  // form or link to supplier website
  renderHelpFormDiv() {
    if (this.props.helpDetailsObj) {
      if (this.props.helpDetailsObj.view) {
        if (this.props.helpDetailsObj.view.link) {
          if (this.props.userToken) {
            if (this.props.tripObj) {
              return (
                <div className="HelpDetailsSubDiv">

                  <a
                    href="https://help.cabify.com/hc/en-us/requests/new"
                    target="_blank"
                  >
                    Click to be re-directed to the suppliers site for help
                  </a>
                </div>
              );
            } else {
              if (this.props.orders.length > 0) {
                return (
                  <div className="HelpDetailsTripDiv">
                    <div className="HelpDetailsTripDivTitle">
                      Select the trip you have an issue with
                    </div>
                    <div>{this.renderAllTripsDiv()}</div>
                  </div>
                );
              } else {
                return (
                  <div className="HelpDetailsSubDiv">
                    <div>No trips</div>
                  </div>
                );
              }
            }
          } else {
            return (
              <div className="HelpDetailsSubDiv">
                <div>
                  Please <a href="/login">login</a> for more help
                </div>
              </div>
            );
          }
        } else if (this.props.helpDetailsObj.view.form) {
          const textInputs = this.props.helpDetailsObj.view.form.textInputs;
          return (
            <div>
              <form className="HelpForm">
                {textInputs.map((_, i) => (
                  <MuiThemeProvider>
                    <TextField
                      hintText={_.textInput}
                      type="text"
                      style={{ width: "70%", marginTop: "3vh" }}
                      multiLine={
                        !!(_.ref === "question" || _.ref === "complaint")
                      }
                      value={this.setValue(_.ref)}
                      onChange={event =>
                        this.setText(event.target.value, _.ref, textInputs)}
                    />
                  </MuiThemeProvider>
                ))}
                <div className="ChangePasswordButtonDiv">
                  <button
                    disabled={!this.state.inputFields}
                    className="ChangePasswordButton"
                    onClick={() => this.onPressSubmitForm()}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          );
        }
      }
    }
  }

  // trips list
  renderAllTripsDiv() {
    const { orders } = this.props;
    return (
      <div>
        <div className="TripListHeader">
          <div className="TripListHeaderDate">Date</div>
          <div className="TripListHeaderPrice">Price</div>
          <div className="TripListHeaderDriver">Driver</div>
          <div className="TripListHeaderSupplier">Supplier</div>
        </div>
        <div className="TripsList">
          {orders.map((_, i) => this.renderTripItem(_))}
        </div>
      </div>
    );
  }

  // trip item
  renderTripItem(item) {
    return <TripItem item={item} {...this.props} helpDetailsScreen={true} />;
  }

  renderRelatedQuestionsDiv() {
    const { topicObj } = this.props;

    if (topicObj.question) {

      return (
        <div className="QuestionsSection" style={{ width: '100%' }}>
          <div>
            <div className="QuestionDiv">{topicObj.question}</div>
            <div className="SubQuestionList">
              {topicObj.subQuestions.map((subQuestion, i) => (
                <div className="SubQuestionDiv">
                  <div
                    onClick={() => {
                      this.onClickSubQuestion(subQuestion)
                    }}
                    className="QuestionsLink"
                  >
                    {subQuestion.subQuestion}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )
    } else {
      return null;
    }

  }

  onClickSubQuestion(subQuestion) {
    this.props.addHelpDetailObject(subQuestion);
    this.props.saveHelpState();
    window.scrollTo(0, 0)
  }

  // set text of form to state variables
  async setText(text, ref, textInputs) {
    if (ref === "question") {
      await this.setState({
        formQuestion: text
      });
    } else if (ref === "complaint") {
      await this.setState({
        formComplaint: text
      });
    } else if (ref === "name") {
      await this.setState({
        formName: text
      });
    } else if (ref === "email") {
      await this.setState({
        formEmail: text
      });
    }

    this.checkTextInputs(textInputs);
  }

  // Checks if form inputs are populated /////////////////////////
  checkTextInputs(textInputs) {
    const refs = [];
    for (let i = 0; i < textInputs.length; i++) {
      refs.push(textInputs[i].ref);
    }

    // Zendesk question form /////////////////////////
    if (
      refs.includes("name") &&
      refs.includes("email") &&
      refs.includes("question")
    ) {
      // Disables and enables submit button
      if (
        this.state.formQuestion.length > 0 &&
        this.state.formEmail.length > 0 &&
        this.state.formName.length > 0
      ) {
        this.setState({
          inputFields: true
        });
      } else {
        this.setState({
          inputFields: false
        });
      }
    }

    // Complaint form /////////////////////////
    if (
      refs.includes("name") &&
      refs.includes("email") &&
      refs.includes("complaint")
    ) {
      // Disables and enables submit button
      if (
        this.state.formComplaint.length > 0 &&
        this.state.formEmail.length > 0 &&
        this.state.formName.length > 0
      ) {
        this.setState({
          inputFields: true
        });
      } else {
        this.setState({
          inputFields: false
        });
      }
    }
  }

  // set value of inputs
  setValue(ref) {
    if (ref === "question") {
      return this.state.formQuestion;
    } else if (ref === "complaint") {
      return this.state.formComplaint;
    } else if (ref === "name") {
      return this.state.formName;
    } else if (ref === "email") {
      return this.state.formEmail;
    }
  }

  // form button function
  onPressSubmitForm() {
    if (
      this.props.userProfile.email &&
      this.props.userProfile.firstName &&
      this.props.userProfile.lastName
    ) {
      this.setState({
        formName: `${this.props.userProfile.firstName} ${this.props.userProfile
          .lastName}`,
        formEmail: this.props.userProfile.email,
        formQuestion: "",
        formComplaint: "",
        inputFields: false
      });
    } else {
      this.setState({
        formName: "",
        formEmail: "",
        formQuestion: "",
        formComplaint: "",
        inputFields: false
      });
    }

    this.createQuestionZendeskTicket(
      this.props.helpDetailsObj.subQuestion,
      this.state.formName,
      this.state.formEmail,
      this.state.formQuestion
    );
  }

  // send question to zendesk board
  createQuestionZendeskTicket(subject, name, email, question) {
    // fetch("https://garethmc.zendesk.com/api/v2/tickets.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: auth
    //   },
    //   method: "POST",
    //   body: JSON.stringify({
    //     ticket: {
    //       subject: subject,
    //       comment: {
    //         body: question
    //       },
    //       requester: {
    //         name: name,
    //         email: email
    //       }
    //     }
    //   })
    // }).then(response => {}); //TODO swal("!", "", "success");
  }

  render() {
    if (count === 0 && this.props.load === true) {
      this.props.saveHelpState();
      count++;
    }

    let text;
    let form;

    if (this.props.helpDetailsObj.view) {
      text = this.props.helpDetailsObj.view.text;
    }

    return (
      <div className="HomeDiv">
        <GlobalHeader
          router={this.props.history}
          signOut={this.props.signOut}
          userToken={this.props.userToken}
          openSidebar={this.props.openSidebar}
          toggleSidebar={this.props.toggleSidebar}
          sidebar={this.props.sidebar}
        />
        <div className="SearchDiv3" />
        <div className="HelpContainer">
          <BrowserView device={isBrowser}>
            <div className="HelpTitleBrowser">
              {this.props.helpDetailsObj.subQuestion}
            </div>
          </BrowserView>
          <MobileView device={isMobile}>
            <div className="HelpTitleMobile">
              {this.props.helpDetailsObj.subQuestion}
            </div>
          </MobileView>

          {this.renderHelpTextDiv(text)}

          {this.renderHelpFormDiv()}

          {this.renderRelatedQuestionsDiv()}
        </div>
      </div>
    );
  }
}
