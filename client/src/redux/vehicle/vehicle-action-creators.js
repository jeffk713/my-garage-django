import { vehicleActionTypes } from './vehicle-action-types';

export const updateVehicleStart = () => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_START,
});

export const updateVehicleSuccess = vehicleData => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_SUCCESS,
  payload: vehicleData,
});

export const updateVehicleFail = () => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_FAIL,
});
