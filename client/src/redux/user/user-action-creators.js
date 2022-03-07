import { userActionTypes } from './user-action-types';

export const userSignInStart = () => ({
  type: userActionTypes.USER_SIGN_IN_START,
});

export const userSignInSuccess = userObj => ({
  type: userActionTypes.USER_SIGN_IN_SUCCESS,
  payload: userObj,
});

export const userSignInFail = () => ({
  type: userActionTypes.USER_SIGN_IN_FAIL,
});
