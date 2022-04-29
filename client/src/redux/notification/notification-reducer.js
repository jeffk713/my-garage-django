import { notificationActionTypes } from './notification-action-types';

const INITIAL_STATE = {
  messages: [],
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default notificationReducer;
