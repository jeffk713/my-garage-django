import { userActionTypes } from './user-action-types';

export const userSignInStart = userObj => ({
  type: userActionTypes.USER_SIGN_IN_START,
  payload: userObj,
});
