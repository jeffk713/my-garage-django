import axios from 'axios';

import {
  addVehicleStart,
  addVehicleSuccess,
  addVehicleFail,
} from '../vehicle-action-creator';
import {
  deleteVehicleFail,
  deleteVehicleStart,
  deleteVehicleSuccess,
  editVehicleFail,
  editVehicleStart,
  editVehicleSuccess,
} from '../vehicle-action-creator/vehicle-action-creators';
import {
  triggerErrorNotification,
  triggerSuccessNotification,
} from '../../notification/notification-action-creators';

export const addVehicleAsync = vehicleInfo => dispatch => {
  dispatch(addVehicleStart());

  const formData = new FormData();

  if (typeof vehicleInfo.imageFile === 'string' || !vehicleInfo.imageFile) {
    delete vehicleInfo.imageFile;
  }

  for (let key in vehicleInfo) {
    if (!vehicleInfo[key]) continue;
    formData.append(key, vehicleInfo[key]);
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  axios
    .post('/api/vehicle/', formData, config)
    .then(res => {
      dispatch(addVehicleSuccess(res.data));
      triggerSuccessNotification(dispatch, [
        'Vehicle has been successfully added!',
      ]);
    })
    .catch(err => {
      dispatch(addVehicleFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const editVehicleAsync = (updatedVehicleData, vehicleId) => dispatch => {
  dispatch(editVehicleStart);

  const formData = new FormData();

  if (
    typeof updatedVehicleData.imageFile === 'string' ||
    !updatedVehicleData.imageFile
  ) {
    delete updatedVehicleData.imageFile;
  }

  for (let key in updatedVehicleData) {
    if (!updatedVehicleData[key]) continue;
    formData.append(key, updatedVehicleData[key]);
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  axios
    .patch(`/api/vehicle/${vehicleId}/`, formData, config)
    .then(res => {
      dispatch(editVehicleSuccess(res.data));
      triggerSuccessNotification(dispatch, [
        'Vehicle has been successfully updated!',
      ]);
    })
    .catch(err => {
      dispatch(editVehicleFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const deleteVehicleAsync = vehicleId => dispatch => {
  dispatch(deleteVehicleStart());
  axios
    .delete(`/api/vehicle/${vehicleId}/`)
    .then(res => {
      dispatch(deleteVehicleSuccess(vehicleId));
      triggerSuccessNotification(dispatch, [
        'Vehicle has been successfully deleted!',
      ]);
    })
    .catch(err => {
      dispatch(deleteVehicleFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};
