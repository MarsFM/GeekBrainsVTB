import {SEND_MESSAGE, twinkleChat} from '../actions/chatActions.js';

export const chatActiveMiddleware = store => next => action => {
  if (action.type === SEND_MESSAGE) {
    const { chatId } = action.payload;
    if (store.getState().router.location.pathname !== `/chats/${chatId}`) {
      store.dispatch(twinkleChat(chatId, true));
    }
  } else if (action.type === '@@router/LOCATION_CHANGE') {
    const chatId = action.payload.location.pathname.split('/')[2];
    if (typeof chatId !== "undefined") {
      const chat = store.getState().entries;
      if (chat) {
        store.dispatch(twinkleChat(chatId, false))
      }
    }
  }

  return next(action);
};