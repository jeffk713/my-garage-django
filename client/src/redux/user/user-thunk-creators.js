import axios from 'axios';

import { userSignInStart } from './user-action-creators';

export const userSignInAsync = userCredentials => dispatch => {
  console.log('user sign in async', userCredentials);

  dispatch(userSignInStart(userCredentials));
};
