import { loop, Effects } from "redux-loop";
import uuid from "uuid";
import Raven from "raven-js";

import { LOAD } from 'redux-storage';

import Config from "../config";
import { login, getUserProfile, updateUserProfile } from "../user/user";

import * as constants from "../const";

/* Initial state */

const UserProfile = (
  {
    firstName = null,
    lastName = null,
    userMobile = null,
    displayUserMobile = null,
    email = null,
    password = null
  } = {}
) => ({
  firstName,
  lastName,
  userMobile,
  displayUserMobile,
  email,
  password
});

const UserState = () => ({
  /*
   * Unique user token. This value will be available after 'register' and should be included
   * in headers header of any API call requiring authentication.
   * This value is persisted in client local storage after signup and/or login.
   */
  userToken: null,

  profile: true,

  /*
   * User id is unique identifier based on hashed value of the userMobile in order to 
   * set user context for Sentry.io reports.
   */
  userId: null,

  /*
   * Client key used to encrypt partner sign in credential on the server side.
   */
  clientKey: null,

  /*
   * Registration phase
   */

  isSubmitting: false,
  isUserRegistered: false,
  isUserVerified: false,

  /*
   * Set if the user has been succesfully enabled.
   * This value is persisted in client local storage after signup and/or login.
   */
  isUserEnabled: false,

  /*
   * Set if the user has gone through the on oarding process.
   * This value is persisted in client local storage after they have done it once.
   */
  isUserOnboarded: false,

  /*
   * Notification type, one of 'push', 'sms', 'none'
   */
  notificationType: null,
  isUserClientUpdated: false,

  /*
   * Password reset
   */
  passwordResetMessage: false,

  /*
   * Partner program
   */
  partnerRef: Config.partner,
  partnerUserDetails: null,

  /*
   * User details, either set by params passed or by signup phase UI
   */
  isGettingUserProfile: false,
  isUpdatingUserProfile: false,
  isUserProfileUpdated: false,
  userProfile: UserProfile(),
  userProfileSynchronize: false,

  /*
   * Payment options
   */
  isFetchingPaymentOptions: false,
  paymentOptions: null,

  selectedPaymentType: null,
  userError: null,

  signUpScreenIndex: 0,
  signUpButtonValid: false,

  isCreditCardUpdateSuccessful: false,
  paymentTypeSuccessful: false,
  partnerProgramLoginSuccess: false,
  signUpStep: 0,
  lastPath: null,
  load: false,
  sidebar: false
});

export const initialUserState = UserState();

/* Actions */

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "GET_USER_PROFILE_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export const SET_LAST_PATH = "SET_LAST_PATH";

export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE';

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export function loginRequest(userMobile, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      userMobile,
      password
    }
  };
}

export function loginSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      result
    }
  };
}

export function loginFailure(code) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      code
    }
  };
}

export function getUserProfileRequest(userToken) {
  return {
    type: GET_USER_PROFILE_REQUEST,
    payload: {
      userToken
    }
  };
}

export function getUserProfileSuccess(result) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: {
      result
    }
  };
}

export function getUserProfileFailure(code) {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: {
      code
    }
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function setLastPath(lastPath) {
  return {
    type: SET_LAST_PATH,
    payload: {
      lastPath
    }
  };
}

export function updateUserProfileRequest(userToken, userProfile) {
  return {
    type: UPDATE_USER_PROFILE_REQUEST,
    payload: {
      userToken,
      userProfile
    }
  };
}

export function updateUserProfileSuccess(userProfile) {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    payload: {
      userProfile
    }
  };
}

export function updateUserProfileFailure(code) {
  return {
    type: UPDATE_USER_PROFILE_FAILURE,
    payload: {
      code
    }
  };
}

export function toggleSidebar(){
  return{
    type: TOGGLE_SIDEBAR
  }
}


/* Reducer */

export function UserStateReducer(state = initialUserState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const { userMobile, password } = action.payload;
      const { partnerRef } = state;
      return loop(
        {
          ...state,
          isSubmitting: true,
          userError: {
            context: null,
            code: null
          }
        },
        Effects.promise(
          login,
          { userMobile, password, partnerRef },
          loginSuccess,
          loginFailure
        )
      );
    }
    case LOGIN_SUCCESS: {
      const { userToken, userId } = action.payload.result;
      Raven.setUserContext({ id: userId });
      return {
        ...state,
        userToken,
        userId,
        isSubmitting: false,
        isUserEnabled: true
      };
      //Effects.constant(getPaymentOptionsRequest())
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        userError: {
          context: constants.ERR_CTX_USER_LOGIN,
          ...action.payload
        },
        isSubmitting: false
      };
    }
    case GET_USER_PROFILE_REQUEST: {
      const { userToken } = action.payload;
      return loop(
        {
          ...state,
          isGettingUserProfile: true,
          userError: {
            context: null,
            code: null
          }
        },
        Effects.promise(
          getUserProfile,
          { userToken },
          getUserProfileSuccess,
          getUserProfileFailure
        )
      );
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        isGettingUserProfile: false,
        profile: false,
        userProfile: UserProfile(action.payload.result)
      };
    }
    case GET_USER_PROFILE_FAILURE: {
      return {
        ...state,
        isGettingUserProfile: false,
        userError: {
          context: constants.ERR_CTX_USER_GET_USER_PROFILE,
          ...action.payload
        }
      };
    }
    case SET_LAST_PATH: {
      return{
        ...state,
        lastPath: action.payload.lastPath
      }
    }
    case LOAD:{
      return{
        ...state,
        load: true
      }
    }
    case UPDATE_USER_PROFILE_REQUEST: {
      const { userToken, userProfile } = action.payload;
      return loop(
        {
          ...state,
          isUpdatingUserProfile: true,
          isUserProfileUpdated: false,
          userError: {
            context: null,
            code: null
          }
        },
        Effects.promise(
          updateUserProfile,
          { userToken, ...userProfile },
          updateUserProfileSuccess,
          updateUserProfileFailure
        )
      );
    }
    case UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        isUpdatingUserProfile: false,
        isUserProfileUpdated: true,
        userProfile: UserProfile({
          ...state.userProfile,
          ...action.payload.userProfile
        })
      };
    }
    case UPDATE_USER_PROFILE_FAILURE: {
      return {
        ...state,
        isUpdatingUserProfile: false,
        userError: {
          context: constants.ERR_CTX_USER_UPDATE_USER_PROFILE,
          ...action.payload
        }
      };
    }
    case TOGGLE_SIDEBAR: {
      if(state.sidebar === false){   
        return{
          ...state,
          sidebar: true
        }
      } else {
        return{
          ...state,
          sidebar: false
        }
      }
    }
    default:
      return state;
  }
}
