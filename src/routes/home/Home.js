import React from "react";
import GlobalHeader from "../globalHeader/GlobalHeader.js";
import GlobalFooter from "../globalFooter/GlobalFooter.js";
import swal from "sweetalert";

import balloon from "../../assets/icons8-hot_air_balloon.png";

import "./Home.css";

import { topics } from "./topics";
import { tripTopics } from "./tripTopics";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: [],
      questions: []
    };
  }

  componentWillMount() {
    let questions = [];
    let tripTopicsCopy = JSON.parse(JSON.stringify(tripTopics));
    let topicsCopy = JSON.parse(JSON.stringify(topics));

    if (this.props.userToken) {
      this.props.getUserProfile(this.props.userToken);
    }

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

    this.setState({
      questions: questions
    });
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
      <div className="HomeDiv">
        <GlobalHeader
          router={this.props.history}
          signOut={this.props.signOut}
          userToken={this.props.userToken}
          openSidebar={this.props.openSidebar}
          toggleSidebar={this.props.toggleSidebar}
          sidebar={this.props.sidebar}
        />
        <div className="SearchDiv">
          <div className="SearchText">Search:</div>
          <input
            className="SearchBar"
            type="text"
            placeholder="e.g. I forgot my...."
            onChange={event => this.filterQuestions(event)}
          />
        </div>

        {this.state.questions.map((question, i) => (
          <div className="QuestionsSection">
            {question.subQuestions.length === 0 ? null : (
              <div>
                <div className="QuestionDiv">{question.question}</div>
                <div className="SubQuestionList">
                  {question.subQuestions.map((subQuestion, i) => (
                    <div className="SubQuestionDiv">
                      <div
                        onClick={() => {
                          this.props.addTopicObject(question);
                          this.props.addHelpDetailObject(subQuestion);
                          this.props.clearTripObject();
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
        {/* <GlobalFooter /> */}
      </div>
    );
  }
}
