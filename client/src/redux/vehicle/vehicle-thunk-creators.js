import axios from 'axios';

import {
  addVehicleStart,
  addVehicleSuccess,
  addVehicleFail,
  updateVehicleNoteStart,
  updateVehicleNoteSuccess,
  updateVehicleNoteFail,
} from './vehicle-action-creators';

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
