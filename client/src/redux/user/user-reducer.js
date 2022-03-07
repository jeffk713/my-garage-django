import { userActionTypes } from './user-action-types';

const INITIAL_STATE = {
  isLoading: false,
  isAuth: false,
  name: null,
  email: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case userActionTypes.USER_SIGN_IN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
