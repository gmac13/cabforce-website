import request from '../util/request';
import Config from '../config';

// import { localeLanguageIdentifier } from '../util/locale'; TODO

import { PARTNER_SIGN_IN_TIMEOUT } from '../const';

export const login = ({ userMobile, password, partnerRef }, success, failure) =>
  request({
    method: 'POST',
    route: '/od/v1/user/login',
    lang: 'en',
    body: {
      userMobile,
      password,
      partnerRef
    },
    success,
    failure
  });

  export const getUserProfile = ({ userToken }, success, failure) =>
  request({
    userToken,
    route: '/od/v1/user',
    lang: 'en',
    success,
    failure
  });

  export const updateUserProfile = ({ userToken, ...userProfile }, success, failure) =>
  request({
    userToken,
    method: 'PUT',
    route: '/od/v1/user',
    lang: 'en',
    body: userProfile,
    success,
    failure
  });

