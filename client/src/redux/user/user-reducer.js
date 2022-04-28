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
    case userActionTypes.USER_SIGN_OUT_START:
    case userActionTypes.USER_SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.USER_SIGN_IN_SUCCESS:
    case userActionTypes.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoading: false,
      };
    case userActionTypes.USER_SIGN_IN_FAIL:
    case userActionTypes.USER_SIGN_OUT_SUCCESS:
    case userActionTypes.USER_SIGN_UP_FAIL:
      return { ...INITIAL_STATE };
    case userActionTypes.USER_SIGN_OUT_FAIL:
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
