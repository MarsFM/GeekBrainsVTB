import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history";
import { routerMiddleware } from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage  from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

import initReducer from './reducers';
import {robotMiddleware} from "./middlewares/robot.js";
import {chatActiveMiddleware} from "./middlewares/chatActive.js";

export const history = createBrowserHistory();

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["profiles"]
};

export const initStore = () => {
  const initialStore = {};

  const store = createStore(
    persistReducer(persistConfig, initReducer(history)),
    initialStore,
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      robotMiddleware,
      chatActiveMiddleware,
      logger
    )
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};