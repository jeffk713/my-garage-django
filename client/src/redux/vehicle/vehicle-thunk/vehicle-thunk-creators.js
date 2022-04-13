import axios from 'axios';

import {
  addVehicleStart,
  addVehicleSuccess,
  addVehicleFail,
} from '../vehicle-action-creator';

export const addVehicleAsync = vehicleInfo => dispatch => {
  dispatch(addVehicleStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (!vehicleInfo['imageFile']) {
    delete vehicleInfo['imageFile'];
  }
  const body = JSON.stringify(vehicleInfo);

  axios
    .post('/api/vehicle/', body, config)
    .then(res => {
      dispatch(addVehicleSuccess(res.data));
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch(addVehicleFail());
    });
};
