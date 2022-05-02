import axios from 'axios';

import { awsServer } from '../../reqUrl';
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
import {
  triggerErrorNotification,
  triggerSuccessNotification,
} from '../../notification/notification-action-creators';

export const addVehicleServiceAsync = serviceInfo => dispatch => {
  dispatch(addVehicleServiceStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(serviceInfo);

  axios
    .post(`${awsServer}/api/service/`, body, config)
    .then(res => {
      dispatch(addVehicleServiceSuccess(res.data));
      triggerSuccessNotification(dispatch, [
        'Service has been successfully added!',
      ]);
    })
    .catch(err => {
      dispatch(addVehicleServiceFail());
      triggerErrorNotification(dispatch, err.response.data.error);
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
      .patch(`${awsServer}/api/service/${serviceId}/`, body, config)
      .then(res => {
        dispatch(updateVehicleServiceSuccess(res.data));
        triggerSuccessNotification(dispatch, [
          'Service has been successfully updated!',
        ]);
      })
      .catch(err => {
        dispatch(updateVehicleServiceFail());
        triggerErrorNotification(dispatch, err.response.data.error);
      });
  };

export const deleteVehicleServiceAsync = serviceId => dispatch => {
  dispatch(deleteVehicleServiceStart());
  axios
    .delete(`${awsServer}/api/service/${serviceId}/`)
    .then(res => {
      dispatch(deleteVehicleServiceSuccess(res.data.vehicle, serviceId));
      triggerSuccessNotification(dispatch, [
        'Service has been successfully deleted!',
      ]);
    })
    .catch(err => {
      dispatch(deleteVehicleServiceFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};
