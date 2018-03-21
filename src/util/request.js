import axios from 'axios';
import Qs from 'qs';

import Config from '../config';
import {
  DEFAULT_REQUEST_TIMEOUT,
  ERR_REQUEST_TIMEOUT,
  ERR_REQUEST_NETWORK_ERROR,
  REQUEST_CANCELLED
} from '../const';

/*
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios, { delayResponse: 1000 });
mock.onGet(`${Config.serverUrl}/od/v1/user/payment-options`).reply(200, {
  status: "ready",
  paymentMethods: [
    {
      type: "CREDIT_CARD",
      status: "pending",
      id: "64ada6e379f55268",
      cardNumberMasked: ".... .... .... 1234",
      cardType: "visa",
      validThru: "01/2021"
    },
    {
      type: "CREDIT_CARD",
      status: "unavailable",
      id: "2a09e38b7592f384",
      cardNumberMasked: ".... .... .... 7777",
      cardType: "mastercard",
      validThru: "01/2017"
    },
    {
      type: "PARTNER_PROGRAM",
      status: "ok",
      id: "7dfd64b2a7937c14",
      partnerRef: "DEMOPARTNER",
      partnerProgramName: "+renfe",
      partnerProgramTier: "Oro",
      balance: "79405.43 points/DEMOPARTNER"
    }
  ]
})
.onDelete(`${Config.serverUrl}/od/v1/user/payment-options/64ada6e379f55268`).reply(config =>
  [200, {
    id: '64ada6e379f55268'
  }]
)
.onDelete(`${Config.serverUrl}/od/v1/user/payment-options/2a09e38b7592f384`).reply(config =>
  [200, {
    id: '2a09e38b7592f384'
  }]
)
.onPost(`${Config.serverUrl}/od/v1/user/payment-options`).reply(200, {
  id: "4d33f1d9-304d-49af-8301-9531a5911623",
  type: "CREDIT_CARD",
  status: "pending",
  token: "string",
  cardNumberMasked: ".... **** **** 1234",
  cardType: "Visa",
  validThru: "09/2018"
})
.onAny().passThrough();
*/

const { CancelToken } = axios;
const cancellations = {};

const cancel = route => ({
  type: REQUEST_CANCELLED,
  payload: {
    route
  }
});

const request = ({
  userToken = undefined,
  method = 'GET',
  host = Config.serverUrl,
  route,
  lang = 'en',
  params = undefined,
  headers = {},
  body = undefined,
  timeout = DEFAULT_REQUEST_TIMEOUT,
  success,
  failure
}) => {
  if (cancellations[route] !== undefined) {
    cancellations[route]();
  }
  /* eslint no-console: 0 */
  console.log(`HTTP ${method} ⟹ ${route}?${Qs.stringify(params)}`, { userToken, ...headers, ...body });
  return axios.request({
    method,
    url: `${host}${route}`,
    params,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': `COD-${Config.partner}-${Config.environment}-${Config.version}`,
      'Accept-Language': lang,
      'x-auth-token': userToken,
      ...headers
    },
    data: body,
    timeout,
    cancelToken: new CancelToken(c => { cancellations[route] = c; })
  }).then(response => {
    console.log(`HTTP ${method} ${response.status} ⟸ ${route}`, response.data);
    if (response.status === 200 || response.status === 201) {
      return success(response.data);
    } else if (response.status === 204) {
      return success();
    }
    return failure(response.status);
  }).catch(error => {
    if (axios.isCancel(error)) {
     console.log(`HTTP ${method} ⟸ ${route} cancelled`);
      return cancel(route);
    }
    const { response } = error;
    if (response !== undefined) {
      console.log(`HTTP ${method} ${response.status} ⟸ ${route}`, response.data);      
      return failure((response.data && response.data.errorCode) || response.status);
    }
    return failure(ERR_REQUEST_NETWORK_ERROR);
  });
};

export default request;