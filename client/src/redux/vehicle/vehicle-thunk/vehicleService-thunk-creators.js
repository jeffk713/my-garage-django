import axios from 'axios';

import {
  addVehicleServiceStart,
  addVehicleServiceSuccess,
  addVehicleServiceFail,
} from '../vehicle-action-creator/vehicleService-action-creators';

export const addVehicleServiceAsync = serviceInfo => dispatch => {
  dispatch(addVehicleServiceStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(serviceInfo);

  axios
    .post('/api/service/', body, config)
    .then(res => {
      dispatch(addVehicleServiceSuccess(res.data));
    })
    .catch(res => {
      console.log(res.response.data.error);
      dispatch(addVehicleServiceFail());
    });
};
