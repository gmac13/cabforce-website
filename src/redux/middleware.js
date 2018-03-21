import loggerMiddleware from './middleware/loggerMiddleware';

import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';


// define store middlewares as an array
export default [
  loggerMiddleware,
  promiseMiddleware,
  thunkMiddleware,
];
