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

export const editVehicleStart = () => ({
  type: vehicleActionTypes.EDIT_VEHICLE_START,
});

export const editVehicleSuccess = vehicleData => ({
  type: vehicleActionTypes.EDIT_VEHICLE_SUCCESS,
  payload: vehicleData,
});

export const editVehicleFail = () => ({
  type: vehicleActionTypes.EDIT_VEHICLE_FAIL,
});

export const deleteVehicleStart = () => ({
  type: vehicleActionTypes.DELETE_VEHICLE_START,
});

export const deleteVehicleSuccess = vehicleId => ({
  type: vehicleActionTypes.DELETE_VEHICLE_SUCCESS,
  payload: vehicleId,
});

export const deleteVehicleFail = () => ({
  type: vehicleActionTypes.DELETE_VEHICLE_FAIL,
});
