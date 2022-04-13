import axios from 'axios';

import {
  updateVehicleNoteStart,
  updateVehicleNoteSuccess,
  updateVehicleNoteFail,
} from '../vehicle-action-creator';

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
      })
      .catch(err => {
        console.log(err.response.data.error);
        dispatch(updateVehicleNoteFail());
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
    .post(`/api/vehiclenote/`, body, config)
    .then(res => {
      dispatch(updateVehicleNoteSuccess(res.data));
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch(updateVehicleNoteFail());
    });
};
