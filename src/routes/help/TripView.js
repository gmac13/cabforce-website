import React, { Component } from "react";
import "./Help.css";

import { List, ListItem } from "material-ui/List";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Button, Fade, Well } from "react-bootstrap";

import MdIconPack from "react-icons/lib/md/chevron-right";
import TextField from "material-ui/TextField";
import { Redirect, Link } from "react-router-dom";
import GlobalHeader from "../globalHeader/GlobalHeader.js";
import { topics } from "../home/topics";
import { tripTopics } from "../home/tripTopics";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import balloon from "../../assets/icons8-hot_air_balloon.png";
import car from "../../assets/icons8-sedan.png";
import mytaxi from "../../assets/mytaxi_logo.png";
import taksee from "../../assets/taksee_logo.png";
import cabify from "../../assets/cabify_logo.png";
import price from "../../assets/price.png";
import map from "../../assets/map.svg";
import supplier from "../../assets/supplier.svg";
import cancel from "../../assets/cancel.png";

export default class TripView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentWillMount() {
    let questions = [];
    let tripTopicsCopy = JSON.parse(JSON.stringify(tripTopics));

    for (var x = 0; x < tripTopicsCopy.length; x++) {
      for (var i = 0; i < tripTopicsCopy[x].questions.length; i++) {
        questions.push(tripTopicsCopy[x].questions[i]);
      }
    }

    if (this.props.userToken) {
      this.props.setLastPath(this.props.history.location.pathname);
    }

    this.setState({
      questions: questions
    });
    window.scrollTo(0, 0);
  }

  supplier() {
    window.location = 'https://help.cabify.com/hc/en-us'
  }

  componentDidMount() {
    if (this.props.userToken) {
      this.props.saveHelpState();
    }
  }

  checkSupplier() {
    if (this.props.tripObj.supplierName === "Cabify") {
      return (
        <div className="SupplierIcon">
          <img src={cabify} className="supplierImage" />{" "}
        </div>
      );
    } else if (this.props.tripObj.supplierName === "Demo") {
      return (
        <div className="SupplierIcon">
          <img src={cabify} className="supplierImage" />
        </div>
      );
    } else if (this.props.tripObj.supplierName === "Taksee") {
      return (
        <div className="SupplierIcon">
          <img scr={taksee} className="supplierImage" />{" "}
        </div>
      );
    }
  }

  renderJourneyDetails = () => {


    if (this.props.tripObj.pickupLocation) {
      if (
        this.props.tripObj.orderStatus === "USER_CANCELLED" ||
        this.props.tripObj.orderStatus === "SUPPLIER_CANCELLED"
      ) {
        const tripObj = this.props.tripObj;
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        let date = new Date(tripObj.orderDateTime);

        const pickupTime = new Date(tripObj.orderDateTime);
        const time = pickupTime.toLocaleTimeString("en-GB").slice(0, 5);

        return (
          <div className="">
            <div className="SearchDiv3" >

              Your Last Trip Was Cancelled

            </div>

            <div className="YourLastTripFlex">
              <div className="YourLastTripPrice">
                <div className="ViewBorder">
                  <img src={price} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Cancellation Fee </div>
                  <div className="ActualText1"> £25 </div>
                </div>
              </div>
              <div className="YourLastTripLocation">
                <div className="ViewBorder">
                  <img src={cancel} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Journey </div>
                  <div className="ActualTextCancel"> This trip was camcelled    </div>

                </div>
              </div>
              <div className="YourLastTripSupplier">
                <div className="ViewBorder">
                  <img src={supplier} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Supplier </div>
                  <div className="ActualText1"> Renfe </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        const tripObj = this.props.tripObj;
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        let date = new Date(tripObj.pickupDatetime);

        const pickupTime = new Date(tripObj.pickupDatetime);
        const time = pickupTime.toLocaleTimeString("en-GB").slice(0, 5);

        return (

          // <div className="TripViewTopDiv">
          //   <div className="MapDiv">
          //     <img
          //       src={
          //         tripObj.dropoffLocation
          //           ? `https://maps.googleapis.com/maps/api/staticmap?&scale=2&&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=512x250&maptype=road&markers=size:mid%7Ccolor:red%7Clabel:D%7C${tripObj
          //             .dropoffLocation.coords.latitude},${tripObj
          //               .dropoffLocation.coords
          //               .longitude}&markers=size:mid%7Ccolor:red%7Clabel:P%7C${tripObj
          //                 .pickupLocation.coords.latitude},${tripObj
          //                   .pickupLocation.coords
          //                   .longitude}&key=AIzaSyDO-R-IF2xLQQtA_sWlJkzWZsGNSkn8n_s`
          //           : `https://maps.googleapis.com/maps/api/staticmap?&scale=2&&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=512x250&maptype=road&markers=size:mid%7Ccolor:red%7Clabel:P%7C${tripObj
          //             .pickupLocation.coords.latitude},${tripObj
          //               .pickupLocation.coords
          //               .longitude}&markers=size:mid%7Ccolor:red%7Clabel:P%7C$`
          //       }
          //       style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          //     />
          //   </div>
          //   <div className="DetailsDiv">
          //     <div className="DetailsDivJourney">
          //       {this.props.tripObj.pickupLocation.address}
          //       {" " + "to" + " "}
          //       {this.props.tripObj.dropoffLocation.address}
          //     </div>
          //     <div className="DetailsDivDateTime">
          //       {date.toLocaleString("en-US", dateOptions)} {"at " + time}
          //     </div>
          //     <div className="DetailsDivPrice">
          //       {this.props.tripObj.totalPrice}
          //     </div>
          //     <div className="DetailsDivIcon">{this.checkSupplier()}</div>
          //   </div>
          // </div>

          <div className="">
            <div className="SearchDiv3" >

              Your Last Trip

            </div>

            <div className="YourLastTripFlex">
              <div className="YourLastTripPrice">
                <div className="ViewBorder">
                  <img src={price} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Price </div>
                  <div className="ActualText1"> {this.props.tripObj.totalPrice} </div>
                </div>
              </div>
              <div className="YourLastTripLocation">
                <div className="ViewBorder">
                  <img src={map} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Journey </div>
                  <div className="ActualText"> To :    {this.props.tripObj.dropoffLocation.address} </div>
                  <div className="ActualText">From :    {this.props.tripObj.pickupLocation.address} </div>
                </div>
              </div>
              <div className="YourLastTripSupplier">
                <div className="ViewBorder">
                  <img src={supplier} height={'73vh'} width={'85vw'} />
                  <div className="TextDescription"> Supplier </div>
                  <div className="ActualText1">  {this.props.tripObj.supplierName} </div>
                </div>
              </div>

            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  };

  renderJourneyDetailsMobile = () => {
    if (this.props.tripObj.pickupLocation) {
      if (
        this.props.tripObj.orderStatus === "USER_CANCELLED" ||
        this.props.tripObj.orderStatus === "SUPPLIER_CANCELLED"
      ) {
        const tripObj = this.props.tripObj;
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        let date = new Date(tripObj.orderDateTime);

        const pickupTime = new Date(tripObj.orderDateTime);
        const time = pickupTime.toLocaleTimeString("en-GB").slice(0, 5);

        return (
          <div className="">
            <div className="SearchDiv3" >

              Cancelled Trip

            </div>

            <div className="YourLastTripFlex">
              <div className="YourLastTripPrice">
                <div className="ViewBorderMobile">
                  <img src={price} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Cancel Fee </div>
                  <div className="ActualTextMobile1"> £25 </div>
                </div>
              </div>
              <div className="YourLastTripLocation">
                <div className="ViewBorderMobile">
                  <img src={cancel} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Journey </div>
                  <div className="ActualTextMobile2"> This trip was cancelled </div>

                </div>
              </div>
              <div className="YourLastTripSupplier">
                <div className="ViewBorderMobile">
                  <img src={supplier} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Supplier </div>
                  <div className="ActualTextMobile1"> Renfe </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        const tripObj = this.props.tripObj;
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        let date = new Date(tripObj.pickupDatetime);

        const pickupTime = new Date(tripObj.pickupDatetime);
        const time = pickupTime.toLocaleTimeString("en-GB").slice(0, 5);

        return (



          <div className="">
            <div className="SearchDiv3" >

              Your Last Trip

            </div>

            <div className="YourLastTripFlex">
              <div className="YourLastTripPrice">
                <div className="ViewBorderMobile">
                  <img src={price} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Price </div>
                  <div className="ActualTextMobile1">  {this.props.tripObj.totalPrice} </div>
                </div>
              </div>
              <div className="YourLastTripLocation">
                <div className="ViewBorderMobile">
                  <img src={map} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Journey </div>
                  <div className="ActualTextMobile2"> To : {this.props.tripObj.dropoffLocation.address}  </div>
                  <div className="ActualTextMobile2">From :   {this.props.tripObj.pickupLocation.address}</div>
                </div>
              </div>
              <div className="YourLastTripSupplier">
                <div className="ViewBorderMobile">
                  <img src={supplier} height={'35vh'} width={'41vw'} />
                  <div className="TextDescriptionMobile"> Supplier </div>
                  <div className="ActualTextMobile1"> {this.props.tripObj.supplierName}</div>
                </div>
              </div>
            </div>


          </div>
        );
      }
    } else {
      return null;
    }
  };

  renderDriverDetails = () => {
    return (
      <div className="DriverDetails">
        <div className="IconDiv">
          <img
            src={this.props.tripObj.car.driverImageUrl}
            style={{ height: "5vw", width: "5vw", maxHeight: "100px", maxWidth: "100px", minHeight: "45px", minWidth: "45px", borderRadius: "50px" }}
          />
        </div>
        <div className="TextDriver">
          <div>Driver</div>
          <div>{this.props.tripObj.car.driverName}</div>
        </div>
      </div>
    );
  };

  renderCarDetails = () => {
    return (
      <div className="CarDetails">
        <div className="IconDiv">
          <img src={car} style={{ height: "5vw", width: "5vw", maxHeight: "100px", maxWidth: "100px", minHeight: "45px", minWidth: "45px", borderRadius: "50px" }} />
        </div>
        <div className="TextDriver">
          <div>Car</div>
          <div>{this.props.tripObj.car.carModel}</div>
        </div>
      </div>
    );
  };

  renderQuestionsDiv() {
    const questions = tripTopics["0"].questions;

    return (
      <div>
        <div className="SearchDiv2">
          <div className="SearchText2">Search:</div>
          <input
            className="SearchBar"
            type="text"
            placeholder="e.g. I forgot my...."
            onChange={event => this.filterQuestions(event)}
          />
        </div>
        {this.state.questions.map((question, i) => (
          <div>
            {question.subQuestions.length === 0 ? null : (
              <div>
                <div className="QuestionDiv">{question.question}</div>
                <div className="SubQuestionList">
                  {question.subQuestions.map((subQuestion, i) => (
                    <div className="SubQuestionDiv">
                      <div
                        onClick={() => {
                          this.props.addHelpDetailObject(subQuestion);
                          this.props.history.push({
                            pathname: "/help/details"
                          });
                        }}
                        className="QuestionsLink"
                      >
                        {subQuestion.subQuestion}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  async filterQuestions(event) {
    //create copies of objects
    let tripTopicsCopy = JSON.parse(JSON.stringify(tripTopics));
    let topicsCopy = JSON.parse(JSON.stringify(topics));
    //create blank object
    let questions = [];
    var term = event.target.value;

    //split search term into an array of words
    await this.setState({
      searchTerm: term.split(" ")
    });

    //remove spaces
    for (x = 0; x < this.state.searchTerm.length; x++) {
      this.state.searchTerm = this.state.searchTerm.filter(term => term != "");
    }

    //remove one letter words
    for (x = 0; x < this.state.searchTerm.length; x++) {
      this.state.searchTerm = this.state.searchTerm.filter(
        term => term.length !== 1
      );
    }

    //populate object with copies
    for (var x = 0; x < tripTopicsCopy.length; x++) {
      for (var i = 0; i < tripTopicsCopy[x].questions.length; i++) {
        questions.push(tripTopicsCopy[x].questions[i]);
      }
    }

    for (var x = 0; x < topicsCopy.length; x++) {
      for (var i = 0; i < topicsCopy[x].questions.length; i++) {
        questions.push(topicsCopy[x].questions[i]);
      }
    }

    //filter questions
    if (this.state.searchTerm.length > 0) {
      for (var x = 0; x < questions.length; x++) {
        for (var i = 0; i < questions[x].subQuestions.length; i++) {
          var containsTerm = false;
          for (var k = 0; k < this.state.searchTerm.length; k++) {
            if (
              questions[x].subQuestions[i].subQuestion
                .toLowerCase()
                .includes(this.state.searchTerm[k].toLowerCase())
            ) {
              containsTerm = true;
            }

            if (questions[x].subQuestions[i].tags) {
              if (
                questions[x].subQuestions[i].tags
                  .toLowerCase()
                  .includes(this.state.searchTerm[k].toLowerCase())
              ) {
                containsTerm = true;
              }
            }
          }
          if (containsTerm === false) {
            questions[x].subQuestions[i] = "";
          }
        }
      }
    }

    for (x = 0; x < questions.length; x++) {
      questions[x].subQuestions = questions[x].subQuestions.filter(
        subQuestion => subQuestion != ""
      );
    }

    //return filtered questions
    await this.setState({
      questions: questions
    });
  }

  render() {
    return (

      <div className="Help">
        <GlobalHeader
          router={this.props.history}
          signOut={this.props.signOut}
          userToken={this.props.userToken}
          openSidebar={this.props.openSidebar}
          toggleSidebar={this.props.toggleSidebar}
          sidebar={this.props.sidebar}
        />
        <BrowserView device={isBrowser}>
          <div>{this.renderJourneyDetails()}</div>
        </BrowserView>
        <MobileView device={isMobile}>
          <div>{this.renderJourneyDetailsMobile()}</div>
        </MobileView>
        <div className="HelpContainer">
          {/* {this.props.tripObj.car ? (
            <div className="DriverDetailsDiv">
              {this.renderDriverDetails()}
              {this.renderCarDetails()}
            </div>
          ) : null} */}
          <div className="QuestionsDiv">{this.renderQuestionsDiv()}</div>
        </div>
      </div>
    );
  }
}
