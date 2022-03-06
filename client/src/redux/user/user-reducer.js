import { userActionTypes } from './user-action-types';

const INITIAL_STATE = {
  isAuth: false,
  username: null,
  email: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
