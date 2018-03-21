import { loop, Effects } from 'redux-loop';

import { getOrderHistory, getOrderLifecycle } from './history';

/* Initial state */

const BookingDetails = (
  {
    orderId = null,
    orderRef = null,
    pickupLocation = null,
    driverImageUrl = null,
    carLicencePlate = null,
    carColor = null,
    carModel = null,
    driverName = null,
    driverPhone = null
  } = {}
) => ({
  driverName,
  driverPhone,
  driverImageUrl,
  carLicencePlate,
  carColor,
  carModel
});

const HistoryState = () => ({
  isFetching: false,
  /*
   * Bookings index entries
   */
  orders: [],
  hasMore: false,
  sendInitialRequest: true,
  /*
   * Selected order lifecycle details
   */
  orderLifecycle: null,
  /*
   * Error
   */
  error: null
});

export const initialHistoryState = HistoryState();

/* Actions */

const GET_ORDER_HISTORY_REQUEST = 'GET_ORDER_HISTORY_REQUEST';
const GET_ORDER_HISTORY_SUCCESS = 'GET_ORDER_HISTORY_SUCCESS';
const GET_ORDER_HISTORY_FAILURE = 'GET_ORDER_HISTORY_FAILURE';

const GET_ORDER_LIFECYCLE_REQUEST = 'GET_ORDER_LIFECYCLE_REQUEST';
const GET_ORDER_LIFECYCLE_SUCCESS = 'GET_ORDER_LIFECYCLE_SUCCESS';
const GET_ORDER_LIFECYCLE_FAILURE = 'GET_ORDER_LIFECYCLE_FAILURE';

const UNSET_ORDER_HISTORY = 'UNSET_ORDER_HISTORY';

export function getOrderHistoryRequest(userToken) {
  return {
    type: GET_ORDER_HISTORY_REQUEST,
    payload: {
      userToken
    }
  };
}

export function getOrderHistorySuccess(orders) {
  return {
    type: GET_ORDER_HISTORY_SUCCESS,
    payload: {
      orders
    }
  };
}

export function getOrderHistoryFailure(error) {
  return {
    type: GET_ORDER_HISTORY_FAILURE,
    payload: {
      error
    }
  };
}

export function getOrderLifecycleRequest(userToken, orderId) {
  return {
    type: GET_ORDER_LIFECYCLE_REQUEST,
    payload: {
      userToken,
      orderId
    }
  };
}

export function getOrderLifecycleSuccess(orderLifecycle) {
  return {
    type: GET_ORDER_LIFECYCLE_SUCCESS,
    payload: {
      orderLifecycle
    }
  };
}

export function getOrderLifecycleFailure(error) {
  return {
    type: GET_ORDER_LIFECYCLE_FAILURE,
    payload: {
      error
    }
  };
}

export const unsetOrderHistory = () => ({
  type: UNSET_ORDER_HISTORY
});

/* Reducer */

export function HistoryStateReducer(state = initialHistoryState, action) {
  switch (action.type) {
    case GET_ORDER_HISTORY_REQUEST: {
      const { userToken } = action.payload;
      return loop(
        { ...state, isFetching: true },
        Effects.promise(
          getOrderHistory,
          { userToken, offset: state.orders.length },
          getOrderHistorySuccess,
          getOrderHistoryFailure
        )
      );
    }
    case GET_ORDER_HISTORY_SUCCESS: {
      return {
        ...state,
        orders: [...action.payload.orders.history.reverse(), ...state.orders],
        hasMore: action.payload.orders.hasMore,
        isFetching: false
      };
    }
    case GET_ORDER_HISTORY_FAILURE: {
      return { ...state, isFetching: false, error: action.payload.error };
    }
    case GET_ORDER_LIFECYCLE_REQUEST: {
      const { userToken, orderId } = action.payload;
      return loop(
        { ...state, gotLastOrder: false },
        Effects.promise(
          getOrderLifecycle,
          { userToken, orderId },
          getOrderLifecycleSuccess,
          getOrderLifecycleFailure
        )
      );
    }
    case GET_ORDER_LIFECYCLE_SUCCESS: {
      return {
        ...state,
        lastOrder: action.payload,
        gotLastOrder: true
      };
    }
    case GET_ORDER_LIFECYCLE_FAILURE: {
      return {
        ...state,
        error: action.payload,
        gotLastOrder: false
      };
    }
    case UNSET_ORDER_HISTORY: {
      return { ...state, orders: [], hasMore: false };
    }
    default: {
      return state;
    }
  }
}