import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

const middlewareThunk = applyMiddleware(...middlewares);

export default createStore(reducer, middlewareThunk);
