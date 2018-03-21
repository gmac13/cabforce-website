import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import GlobalHeader from "../globalHeader/GlobalHeader.js";
import { GoogleMap, Marker } from "react-google-maps";
import balloon from "../../assets/icons8-hot_air_balloon.png";
import Lottie from 'react-lottie';

import MdIconPack from "react-icons/lib/md/chevron-right";
import * as animationData from '../../assets/empty_list.json';

import {
  REGEX_VALID_EMAIL,
  REGEX_VALID_PASSWORD,
  PROFILE_ICON_SIZE
} from "../../const";

import "./Profile.css";

import swal from "sweetalert";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import TripItem from "../trips/TripItem";



let count = 0;
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Profile",
      edit: false,
      newPass: "",
      oldPass: "",
      confirm: "",
      disabled: true,
      passwordValid: false,
      first: "",
      last: "",
      email: "",
      confirmEmail: "",
      isStopped: false,
      isPaused: false
    };
  }

  componentWillReceiveProps() {
    if (this.props.userProfile) {
      this.setState({
        first: this.props.userProfile.firstName,
        last: this.props.userProfile.lastName,
        email: this.props.userProfile.email
      });
    }
  }

  componentWillMount() {
    if (this.props.userToken) {
      this.props.getUserProfile(this.props.userToken);
      this.props.setLastPath(this.props.history.location.pathname);
    }

    if (this.props.userToken) {
      this.props.getOrderHistory(this.props.userToken);
    }

    if (!this.props.userProfile.userMobile) {
      this.props.getUserProfile(this.props.userToken);
    }

    // resets scroll
    window.scrollTo(0, 0);
  }

  profile = () => {
    if (this.props.load === true && count === 0) {
      this.props.getUserProfile(this.props.userToken);
      count++;
    }
    return (
      <div className="ProfileSubDiv">
        {this.state.edit === false ? (
          <div>
            <div
              className="EditButtonDiv"
              onClick={() => {
                this.setState({
                  edit: true
                });
              }}
            >
              Edit
            </div>

            <div className="ProfileName">
              {this.props.userProfile.firstName}{" "}
              {this.props.userProfile.lastName}
            </div>
            <div className="ProfileNumber">
              {this.props.userProfile.displayUserMobile}
            </div>
            <div className="ProfileEmail">{this.props.userProfile.email}</div>
          </div>
        ) : (
            this.renderEdit()
          )}
        {this.state.view === "Profile" ? (
          <div
            className="ChangePasswordDiv"
            onClick={() => {
              this.setState({
                view: "Password"
              });
            }}
          >
            <div className="ChangePasswordButtonText">Change Password</div>
            <div className="PasswordChevronDiv">
              <MdIconPack size={"26px"} />
            </div>
          </div>
        ) : (
            this.renderChangePassword()
          )}
      </div>
    );
  };

  renderEdit() {
    return (
      <div>
        <div
          className="EditButtonDiv"
          onClick={() => {
            this.setState({
              edit: false
            });
          }}
        >
          Done
        </div>
        <MuiThemeProvider>
          <BrowserView device={isBrowser}>
            <div className="ProfileName">
              <TextField
                hintText="First Name"
                name="edit-first-name"
                type="text"
                defaultValue={this.props.userProfile.firstName}
                onChange={event => {
                  this.setState({
                    first: event.target.value
                  });
                }}
                errorText={null}
              />
            </div>
            <div className="ProfileName">
              <TextField
                hintText="Second Name"
                name="edit-second-name"
                type="text"
                defaultValue={this.props.userProfile.lastName}
                onChange={event => {
                  this.setState({
                    last: event.target.value
                  });
                }}
                errorText={null}
              />
            </div>

            <button
              className="ChangePasswordButton"
              onClick={() => {
                this.props.updateNames(
                  this.props.userToken,
                  this.state.first,
                  this.state.last
                );
                swal("Name Changed!", "Well done horse", "success");
              }}
            >
              Change Name
            </button>

            <div className="ProfileName">
              <TextField
                hintText="Email"
                name="edit-email"
                type="text"
                defaultValue={this.props.userProfile.email}
                onChange={event => {
                  this.setState({
                    email: event.target.value
                  });
                }}
                errorText={null}
              />
            </div>
            <div className="ProfileName">
              <TextField
                hintText="Confirm Email"
                name="confirm-email"
                type="text"
                onChange={event => {
                  this.setState({
                    confirmEmail: event.target.value
                  });
                }}
                errorText={null}
              />
            </div>
            <button
              className="ChangePasswordButton"
              onClick={() => {
                this._submitEmailIfValid();
              }}
            >
              Change Email
            </button>
          </BrowserView>

          <MobileView device={isMobile}>
            <div className="MobileForm">
              <div className="ProfileName2">
                <TextField
                  hintText="First Name"
                  name="edit-first-name"
                  type="text"
                  defaultValue={this.props.userProfile.firstName}
                  onChange={event => {
                    this.setState({
                      first: event.target.value
                    });
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>
              <div className="ProfileName2">
                <TextField
                  hintText="Second Name"
                  name="edit-second-name"
                  type="text"
                  defaultValue={this.props.userProfile.lastName}
                  onChange={event => {
                    this.setState({
                      last: event.target.value
                    });
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>

              <button
                className="ChangePasswordButton"
                onClick={() => {
                  this.props.updateNames(
                    this.props.userToken,
                    this.state.first,
                    this.state.last
                  );
                  swal("Name Changed!", "Well done horse", "success");
                }}
              >
                Change Name
              </button>

              <div className="ProfileName2">
                <TextField
                  hintText="Email"
                  name="edit-email"
                  type="text"
                  defaultValue={this.props.userProfile.email}
                  onChange={event => {
                    this.setState({
                      email: event.target.value
                    });
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>
              <div className="ProfileName2">
                <TextField
                  hintText="Confirm Email"
                  name="confirm-email"
                  type="text"
                  onChange={event => {
                    this.setState({
                      confirmEmail: event.target.value
                    });
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>
              <button
                className="ChangePasswordButton"
                onClick={() => {
                  this._submitEmailIfValid();

                }}
              >
                Change Email
              </button>
            </div>
          </MobileView>
        </MuiThemeProvider>
      </div>
    );
  }

  renderChangePassword() {
    return (
      <div className="ChangePasswordFormDiv">
        <div
          className="EditButtonDiv"
          onClick={() => {
            this.setState({
              view: "Profile"
            });
          }}
        >
          Cancel
        </div>
        <MuiThemeProvider>
          <BrowserView device={isBrowser}>
            <form className="ChangePasswordForm">
              <TextField
                hintText="Old Password"
                name="old-password"
                type="password"
                style={{}}
                onChange={event => {
                  this.checkTextFields(event, "old");
                }}
                errorText={null}
              />

              <TextField
                hintText="New Password"
                name="new-password"
                type="password"
                style={{}}
                onChange={event => {
                  this.checkTextFields(event, "new");
                  this._passwordValidator(event);
                }}
                errorText={null}
              />

              <TextField
                hintText="Confirm Password"
                name="confirm-new-password"
                type="password"
                style={{}}
                onChange={event => {
                  this.checkTextFields(event, "confirm");
                }}
                errorText={null}
              />
            </form>
          </BrowserView>

          <MobileView device={isMobile}>
            <form className="MobileForm">
              <div className="ProfileName2">
                <TextField
                  hintText="Old Password"
                  name="old-password"
                  type="password"
                  style={{}}
                  onChange={event => {
                    this.checkTextFields(event, "old");
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>
              <div className="ProfileName2">
                <TextField
                  hintText="New Password"
                  name="new-password"
                  type="password"
                  style={{}}
                  onChange={event => {
                    this.checkTextFields(event, "new");
                    this._passwordValidator(event);
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>

              <div className="ProfileName2">
                <TextField
                  hintText="Confirm Password"
                  name="confirm-new-password"
                  type="password"
                  style={{}}
                  onChange={event => {
                    this.checkTextFields(event, "confirm");
                  }}
                  errorText={null}
                  fullWidth={true}
                />
              </div>
            </form>
          </MobileView>
        </MuiThemeProvider>
        <div className="ChangePasswordButtonDiv">
          <button
            className="ChangePasswordButton"
            onClick={() => {
              this._submitPasswordIfValid();
            }}
            disabled={this.state.disabled}
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }

  _submitPasswordIfValid = async () => {
    if (this.state.passwordValid) {
      if (this.state.newPass === this.state.confirm) {
        const { updatePassword, userToken } = this.props;
        this.setState({ passwordToggled: false });
        await updatePassword(userToken, this.state.oldPass, this.state.newPass);
        if (this.props.isUserProfileUpdated) {
          swal("Success!", "Password changed", "success");
          this.setState({ oldPass: "", newPass: "" });
        } else {
          swal("Failed!", "Please try again", "error");
        }
      } else {
        alert(
          "New password and confirm password do not match!",
          "Please try again",
          "error"
        );
      }
    } else {
      swal("Password not valid!", "Please try again", "error");
    }
  };

  _passwordValidator = value => {
    if (value.target.value && value.target.value.match(REGEX_VALID_PASSWORD)) {
      this.setState({
        passwordValid: true
      });
    } else {
      this.setState({
        passwordValid: false
      });
    }
  };

  // Submits new email request if valid
  _submitEmailIfValid() {
    if (
      this.state.confirmEmail == this.state.email &&
      this.state.email.match(REGEX_VALID_EMAIL)
    ) {
      const { updateEmail, userToken } = this.props;
      updateEmail(userToken, this.state.email);
      swal("Success!", "Email changed", "success");
    } else {
      swal(
        "Email is not valid/does not match confirm email",
        "Please try again",
        "error"
      );
    }
  }

  async checkTextFields(event, field) {
    if (field === "old") {
      await this.setState({ oldPass: event.target.value });
      if (
        this.state.oldPass.length > 0 &&
        this.state.newPass.length > 0 &&
        this.state.confirm.length > 0
      ) {
        this.setState({
          disabled: false
        });
      } else {
        this.setState({
          disabled: true
        });
      }
    } else if (field === "new") {
      await this.setState({ newPass: event.target.value });
      if (
        this.state.oldPass.length > 0 &&
        this.state.newPass.length > 0 &&
        this.state.confirm.length > 0
      ) {
        this.setState({
          disabled: false
        });
      } else {
        this.setState({
          disabled: true
        });
      }
    } else if (field === "confirm") {
      await this.setState({ confirm: event.target.value });
      if (
        this.state.oldPass.length > 0 &&
        this.state.newPass.length > 0 &&
        this.state.confirm.length > 0
      ) {
        this.setState({
          disabled: false
        });
      } else {
        this.setState({
          disabled: true
        });
      }
    }
  }

  renderAllTripsDiv() {
    const defaultOptions = {

      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {

      }
    };

    const { orders } = this.props;
    if (orders.length > 0) {
      return (
        <div>
          <div className="HelpTitleBrowser">Your Trips</div>
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
    } else {
      return (
        <div className="HelpDetailsSubDiv2">
          <div style={{ marginTop: '6%' }}>You Have No Trips</div>
          <div style={{ height: '350px', width: '10000px' }}>
            <Lottie options={defaultOptions}

              height={'28vh'}
              width={'60vw'}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
            />
          </div>
        </div>
      );
    }
  }

  renderTripItem(item) {
    return <TripItem item={item} {...this.props} />;
  }

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

        <div>
          <div className="Profile">
            <div className="SearchDiv3">Profile</div>
            <div className="ProfileDiv">{this.profile()}</div>
          </div>
          <div className="Help">
            <div className="ProfileContainer">{this.renderAllTripsDiv()}</div>
          </div>
        </div>

      </div>
    );
  }
}
