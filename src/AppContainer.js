import { connect } from "react-redux";
import {
  loginRequest,
  getUserProfileRequest,
  logoutRequest,
  setLastPath,
  updateUserProfileRequest,
  toggleSidebar
} from "./user/UserState";
import {
  getOrderHistoryRequest,
  unsetOrderHistory
} from "./history/HistoryState";
import {
  addTopicObject,
  clearTopicObject,
  addHelpDetailObject,
  addTripObject,
  saveHelpState,
  clearTripObject
} from "./helpRedux/HelpState";

import AppDiv from "./routes";

export default connect(
  (state, props) => ({
    ...state.userState,
    ...state.historyState,
    ...state.helpState
  }),
  dispatch => ({
    signIn: (userMobile, password) =>
      dispatch(loginRequest(userMobile, password)),
    getUserProfile: userToken => dispatch(getUserProfileRequest(userToken)),
    getOrderHistory: userToken => dispatch(getOrderHistoryRequest(userToken)),
    unsetOrderHistory: () => {
      dispatch(unsetOrderHistory());
    },
    signOut: () => dispatch(logoutRequest()),
    setLastPath: lastPath => dispatch(setLastPath(lastPath)),
    addTopicObject: object => dispatch(addTopicObject(object)),
    clearTopicObject: () => dispatch(clearTopicObject()),
    addHelpDetailObject: object => dispatch(addHelpDetailObject(object)),
    addTripObject: object => dispatch(addTripObject(object)),
    saveHelpState: () => dispatch(saveHelpState()),
    updatePassword: (userToken, oldPassword, newPassword) =>
      dispatch(
        updateUserProfileRequest(userToken, { oldPassword, newPassword })
      ),
    updateNames: (userToken, firstName, lastName) =>
      dispatch(updateUserProfileRequest(userToken, { firstName, lastName })),
    updateEmail: (userToken, email) =>
      dispatch(updateUserProfileRequest(userToken, { email })),
    clearTripObject: () => dispatch(clearTripObject()),
    toggleSidebar: () => dispatch(toggleSidebar())
  })
)(AppDiv);
