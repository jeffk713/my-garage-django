import axios from 'axios';

import {
  updateVehicleNoteStart,
  updateVehicleNoteSuccess,
  updateVehicleNoteFail,
} from '../vehicle-action-creator';
import {
  triggerErrorNotification,
  triggerSuccessNotification,
} from '../../notification/notification-action-creators';

export const updateVehicleNoteAsync =
  (vehicleNote, vehicleNoteId) => dispatch => {
    dispatch(updateVehicleNoteStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(vehicleNote);

    axios
      .patch(`/api/vehiclenote/${vehicleNoteId}/`, body, config)
      .then(res => {
        dispatch(updateVehicleNoteSuccess(res.data));
        triggerSuccessNotification(dispatch, [
          'Vehicle note has been successfully updated!',
        ]);
      })
      .catch(err => {
        dispatch(updateVehicleNoteFail());
        triggerErrorNotification(dispatch, err.response.data.error);
      });
  };

export const createVehicleNoteAsync = vehicleNote => dispatch => {
  dispatch(updateVehicleNoteStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(vehicleNote);

  axios
    .post('/api/vehiclenote/', body, config)
    .then(res => {
      dispatch(updateVehicleNoteSuccess(res.data));
      triggerSuccessNotification(dispatch, [
        'Vehicle note has been successfully updated!',
      ]);
    })
    .catch(err => {
      dispatch(updateVehicleNoteFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};
