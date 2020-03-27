import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {chatsReducer} from "./chatsReducer.js";
import {profilesReducer} from "./profilesReducer.js";


export default (history) => combineReducers({
  chats: chatsReducer,
  profiles: profilesReducer,
  router: connectRouter(history)
});