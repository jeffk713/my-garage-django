import axios from 'axios';

import {
  addVehicleStart,
  addVehicleSuccess,
  addVehicleFail,
} from '../vehicle-action-creator';
import {
  editVehicleFail,
  editVehicleStart,
  editVehicleSuccess,
} from '../vehicle-action-creator/vehicle-action-creators';

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

export const editVehicleAsync = (updatedInfo, vehicleId) => dispatch => {
  dispatch(editVehicleStart);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (!updatedInfo['imageFile']) {
    delete updatedInfo['imageFile'];
  }
  const body = JSON.stringify(updatedInfo);

  axios
    .patch(`api/vehicle/${vehicleId}`, body, config)
    .then(res => {
      dispatch(editVehicleSuccess(res.data));
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch(editVehicleFail());
    });
};
