import axios from 'axios';

import { userSignInStart } from './user-action-creators';

export const userSignInAsync = userCredentials => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(userCredentials);
  axios
    .post('/auth/signin/', body, config)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  dispatch(userSignInStart(userCredentials));
};
