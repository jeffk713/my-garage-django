import axios from 'axios';

import {
  userSignInStart,
  userSignInSuccess,
  userSignInFail,
  userSignOutStart,
  userSignOutSuccess,
  userSignOutFail,
} from './user-action-creators';

export const userSignInAsync = userCredentials => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(userCredentials);
  dispatch(userSignInStart());

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
};

export const userSignOutAsync = () => dispatch => {
  dispatch(userSignOutStart());

  axios
    .delete('/auth/signout')
    .then(res => {
      dispatch(userSignOutSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(userSignOutFail());
    });
};

export const authBySession = () => dispatch => {
  dispatch(userSignInStart());

  axios
    .get('/auth/authenticate/')
    .then(res => {
      const userObj = {
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
      };
      console.log(res.data)
      dispatch(userSignInSuccess(userObj));
    })
    .catch(err => {
      console.log(err);
      dispatch(userSignInFail());
    });
};
