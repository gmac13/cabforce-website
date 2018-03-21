import { applyMiddleware, createStore, compose } from 'redux';
import * as reduxLoop from 'redux-loop';
import * as storage from 'redux-storage';
import Raven from 'raven-js';

import Config from '../config';
import middlewares from './middleware';
import reducer from './reducer';

import filter from 'redux-storage-decorator-filter';
import migrate from 'redux-storage-decorator-migrate';
import createEngine from 'redux-storage-engine-localstorage';

import { stateFilters, eventFilters } from './filters';

const engine = filter(
    migrate(createEngine(`COD:${Config.partner}:${Config.environment}-${Config.version}:state`), 0),
    stateFilters
  );
  
  const middleware = storage.createMiddleware(engine, [], eventFilters);
  
  const enhancer = compose(reduxLoop.install(), applyMiddleware(...middlewares, middleware));
  
  const store = createStore(storage.reducer(reducer), null, enhancer);
  
  const loader = storage.createLoader(engine);
  loader(store)
    .then(newState => {
      if (newState.userState && newState.userState.userId) {
        Raven.setUserContext({ id: newState.userState.userId });
      }
    })
    .catch(_ => {});
  
  export default store;
