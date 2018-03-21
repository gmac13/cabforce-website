import { combineReducers } from 'redux-loop';
import { UserStateReducer, initialUserState } from '../user/UserState';
import { HistoryStateReducer, initialHistoryState } from '../history/HistoryState';
import { HelpStateReducer, initialHelpState } from '../helpRedux/HelpState';


const reducers = {
  userState: UserStateReducer,
  historyState: HistoryStateReducer,
  helpState: HelpStateReducer
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUEST') {
    return {
      ...state,
      userState: { ...initialUserState},
      historyState: { ...initialHistoryState},
      helpState: {...initialHelpState}
    };
  }

  return appReducer(state, action);
};

export default (state, action) => rootReducer(state || void 0, action);
