import {SEND_MESSAGE, sendMessage} from '../actions/chatActions.js';
import {answerRobot} from "../helpers/robot";

const timers = {};

export const robotMiddleware = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {chatId, author} = action.payload;

    if (author !== 'Robot') {
      clearTimeout(timers[chatId]);
      timers[chatId] = setTimeout(() => {
        store.dispatch(sendMessage({chatId, author: 'Robot', message: answerRobot()}));
      }, 3000);
    }
  }

  return next(action);
};