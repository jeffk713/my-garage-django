import { vehicleActionTypes } from '../vehicle-action-type';

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

export const addVehicleStart = () => ({
  type: vehicleActionTypes.ADD_VEHICLE_START,
});

export const addVehicleSuccess = vehicleData => ({
  type: vehicleActionTypes.ADD_VEHICLE_SUCCESS,
  payload: vehicleData,
});

export const addVehicleFail = () => ({
  type: vehicleActionTypes.ADD_VEHICLE_FAIL,
});
