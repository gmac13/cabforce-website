// const HelpObjects = {
//     topicObj: {},
//     subQuestionObj: {},
//     helpDetailViewObj: {},
//     tripObj: {}
// }

const HelpState = () => ({
  topicObj: {},
  subQuestionObj: {},
  helpDetailsObj: {},
  tripObj: {}
});

export const initialHelpState = HelpState();

/* Actions */

export const ADD_TOPIC_OBJECT = "ADD_TOPIC_OBJECT";
export const ADD_SUB_QUESTION_OBJECT = "ADD_SUB_QUESTION_OBJECT";
export const ADD_HELP_DETAIL_OBJECT = "ADD_HELP_DETAIL_OBJECT";
export const ADD_TRIP_OBJECT = "ADD_TRIP_OBJECT";

export const CLEAR_TOPIC_OBJECT = "CLEAR_TOPIC_OBJECT";
export const CLEAR_SUB_QUESTION_OBJECT = "CLEAR_SUB_QUESTION_OBJECT";
export const CLEAR_HELP_DETAIL_OBJECT = "CLEAR_HELP_DETAIL_OBJECT";
export const CLEAR_TRIP_OBJECT = "CLEAR_TRIP_OBJECT";

export const SAVE_HELP_STATE = "SAVE_HELP_STATE";

export function addTopicObject(object) {
  return {
    type: ADD_TOPIC_OBJECT,
    payload: {
      object
    }
  };
}

export function addSubQuestionObject(object) {
  return {
    type: ADD_SUB_QUESTION_OBJECT,
    payload: {
      object
    }
  };
}

export function addHelpDetailObject(object) {
  return {
    type: ADD_HELP_DETAIL_OBJECT,
    payload: {
      object
    }
  };
}

export function addTripObject(object) {
  return {
    type: ADD_TRIP_OBJECT,
    payload: {
      object
    }
  };
}

export function clearTopicObject() {
  return {
    type: CLEAR_TOPIC_OBJECT
  };
}

export function clearSubQuestionObject() {
  return {
    type: CLEAR_SUB_QUESTION_OBJECT
  };
}

export function clearHelpDetailObject() {
  return {
    type: CLEAR_HELP_DETAIL_OBJECT
  };
}

export function clearTripObject() {
  return {
    type: CLEAR_TRIP_OBJECT
  };
}

export function saveHelpState() {
  return {
    type: SAVE_HELP_STATE
  };
}

export function HelpStateReducer(state = initialHelpState, action = {}) {
  switch (action.type) {
    case ADD_TOPIC_OBJECT: {
      return {
        ...state,
        topicObj: action.payload.object
      };
    }
    case ADD_HELP_DETAIL_OBJECT: {
      return {
        ...state,
        helpDetailsObj: action.payload.object
      };
    }
    case ADD_TRIP_OBJECT: {
      return {
        ...state,
        tripObj: action.payload.object
      };
    }
    case SAVE_HELP_STATE: {
      return {
        ...state
      };
    }
    case CLEAR_TRIP_OBJECT: {
      return{
        ...state,
        tripObj: null
      }
    }
    default:
      return state;
  }
}
