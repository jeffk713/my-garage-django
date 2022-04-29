import { notificationActionTypes } from './notification-action-types';

const INITIAL_STATE = {
  error: false,
  messages: [],
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notificationActionTypes.DISPLAY_SUCCESS_NOTIFICATION:
      return {
        ...state,
        messages: action.payload,
        error: false,
      };
    case notificationActionTypes.DISPLAY_ERROR_NOTIFICATION:
      return {
        ...state,
        messages: action.payload,
        error: true,
      };
    case notificationActionTypes.HIDE_NOTIFICATION:
      return {
        ...state,
        messages: [],
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notificationReducer;
