import {
  REQUEST_PROFILES,
  SUCCESS_PROFILES
} from "../actions/profileActions.js";

const initialState = {
  entries: {},
  loading: true
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROFILES: {
      return {
        ...state,
        loading: true
      }
    }
    case SUCCESS_PROFILES: {
      const data = action.payload;
      return {
        ...state,
        entries: data,
        loading: false
      }
    }
    default:
      return state
  }
};