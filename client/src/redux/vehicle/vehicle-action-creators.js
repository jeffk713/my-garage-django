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

export const updateVehicleNoteStart = () => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_NOTE_START,
});

export const updateVehicleNoteSuccess = updatedVehicleNote => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_NOTE_SUCCESS,
  payload: updatedVehicleNote,
});

export const updateVehicleNoteFail = () => ({
  type: vehicleActionTypes.UPDATE_VEHICLE_NOTE_FAIL,
});
