import axios from 'axios';

import {
  userSignInStart,
  userSignInSuccess,
  userSignInFail,
  userSignOutStart,
  userSignOutSuccess,
  userSignOutFail,
  userSignUpStart,
  userSignUpSuccess,
  userSignUpFail,
} from './user-action-creators';
import { getVehiclesSuccess } from '../vehicle/vehicle-action-creator/vehicle-action-creators';
import {
  triggerErrorNotification,
  triggerSuccessNotification,
} from '../notification/notification-action-creators';

export const userSignInAsync = userCredentials => dispatch => {
  dispatch(userSignInStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(userCredentials);

  axios
    .post('/auth/signin/', body, config)
    .then(res => {
      const userObj = {
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
      };
      localStorage.setItem('garageToken', res.data.token);
      console.log('token: ', localStorage.getItem('garageToken'));
      dispatch(userSignInSuccess(userObj));
      dispatch(getVehiclesSuccess(res.data.vehicles));
    })
    .catch(err => {
      dispatch(userSignInFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const userSignOutAsync = () => dispatch => {
  dispatch(userSignOutStart());

  axios
    .delete(`/auth/signout`)
    .then(res => {
      localStorage.removeItem('garageToken');
      dispatch(userSignOutSuccess());
    })
    .catch(err => {
      dispatch(userSignOutFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const userSignUpAsync = userCredentials => dispatch => {
  dispatch(userSignUpStart());

  const { email, name, password, passwordConfirm } = userCredentials;
  if (password !== passwordConfirm) {
    dispatch(userSignUpFail());
    triggerErrorNotification(dispatch, ['Passwords do not match']);
    return;
  }

  const userDataToSend = { email, name, password };
  const body = JSON.stringify(userDataToSend);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(`/auth/register/`, body, config)
    .then(res => {
      const userObj = {
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
      };
      localStorage.setItem('garageToken', res.data.token);
      console.log('token: ', localStorage.getItem('garageToken'));
      dispatch(userSignUpSuccess(userObj));
      dispatch(getVehiclesSuccess(res.data.vehicles));
      triggerSuccessNotification(dispatch, [
        'User has been successfully registered!',
      ]);
    })
    .catch(err => {
      dispatch(userSignUpFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const authBySession = () => dispatch => {
  dispatch(userSignInStart());
  const config = {
    headers: {
      Authorization: `Token ${localStorage.getItem('garageToken')}`,
    },
  };
  console.log(`Token ${localStorage.getItem('garageToken')}`);
  axios
    .get(`/auth/authenticate/`, config)
    .then(res => {
      const userObj = {
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
      };
      dispatch(userSignInSuccess(userObj));
      dispatch(getVehiclesSuccess(res.data.vehicles));
    })
    .catch(err => {
      dispatch(userSignInFail());
    });
};
