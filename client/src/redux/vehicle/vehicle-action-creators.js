import { vehicleActionTypes } from './vehicle-action-types';

export const getVehiclesStart = () => ({
  type: vehicleActionTypes.GET_VEHICLES_START,
});

export const getVehiclesSuccess = vehicleData => ({
  type: vehicleActionTypes.GET_VEHICLES_SUCCESS,
  payload: vehicleData,
});

export const getVehiclesFail = () => ({
  type: vehicleActionTypes.GET_VEHICLES_FAIL,
});
