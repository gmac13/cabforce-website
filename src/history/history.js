import request from '../util/request';


export const getOrderHistory = ({ userToken, offset, amount = 1000 }, success, failure) =>
  request({
    userToken,
    route: '/od/v1/order/history',
    lang: 'en',
    params: {
      offset,
      amount
    },
    success,
    failure
  });

export const getOrderLifecycle = ({ userToken, orderId }, success, failure) =>
  request({
    userToken,
    route: '/od/v1/order/lifecycle',
    lang: 'en',
    params: {
      orderId
    },
    success,
    failure
  });
