import axios from 'axios';

import {
  addVehicleServiceStart,
  addVehicleServiceSuccess,
  addVehicleServiceFail,
  updateVehicleServiceStart,
  updateVehicleServiceSuccess,
  updateVehicleServiceFail,
  deleteVehicleServiceStart,
  deleteVehicleServiceSuccess,
  deleteVehicleServiceFail,
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
    .catch(err => {
      console.log(err.response.data.error);
      dispatch(addVehicleServiceFail());
    });
};

export const updateVehicleServiceAsync =
  (serviceInfo, serviceId) => dispatch => {
    dispatch(updateVehicleServiceStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(serviceInfo);

    axios
      .patch(`/api/service/${serviceId}/`, body, config)
      .then(res => {
        dispatch(updateVehicleServiceSuccess(res.data));
      })
      .catch(err => {
        console.log(err.response.data.error);
        dispatch(updateVehicleServiceFail());
      });
  };

export const deleteVehicleServiceAsync = serviceId => dispatch => {
  dispatch(deleteVehicleServiceStart());
  axios
    .delete(`/api/service/${serviceId}/`)
    .then(res => {
      dispatch(deleteVehicleServiceSuccess(res.data.vehicle, serviceId));
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch(deleteVehicleServiceFail());
    });
};
