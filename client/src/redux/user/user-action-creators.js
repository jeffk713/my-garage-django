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

export const userSignOutStart = () => ({
  type: userActionTypes.USER_SIGN_OUT_START,
});

export const userSignOutSuccess = () => ({
  type: userActionTypes.USER_SIGN_OUT_SUCCESS,
});

export const userSignOutFail = () => ({
  type: userActionTypes.USER_SIGN_OUT_FAIL,
});

export const userSignUpStart = () => ({
  type: userActionTypes.USER_SIGN_UP_START,
});

export const userSignUpSuccess = userObj => ({
  type: userActionTypes.USER_SIGN_UP_SUCCESS,
  payload: userObj,
});

export const userSignUpFail = () => ({
  type: userActionTypes.USER_SIGN_UP_FAIL,
});
