import { userActionTypes } from './user-action-types';

const INITIAL_STATE = {
  isAuth: false,
  username: null,
  email: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGN_IN_START:
      return {
        ...state,
        username: 'sign in start',
        email: action.payload.email,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
