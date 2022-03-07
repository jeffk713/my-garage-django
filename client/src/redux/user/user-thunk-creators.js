import axios from 'axios';

import {
  userSignInStart,
  userSignInSuccess,
  userSignInFail,
} from './user-action-creators';

export const userSignInAsync = userCredentials => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(userCredentials);
  dispatch(userSignInSuccess());

  axios
    .post('/auth/signin/', body, config)
    .then(res => {
      const userObj = {
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
      };
      dispatch(userSignInSuccess(userObj));
    })
    .catch(err => {
      dispatch(userSignInFail());
    });

  dispatch(userSignInStart(userCredentials));
};
