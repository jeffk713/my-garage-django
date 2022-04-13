import { vehicleNoteActionTypes } from '../vehicle-action-type';

export const updateVehicleNoteStart = () => ({
  type: vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_START,
});

export const updateVehicleNoteSuccess = updatedVehicleNote => ({
  type: vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_SUCCESS,
  payload: updatedVehicleNote,
});

export const updateVehicleNoteFail = () => ({
  type: vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_FAIL,
});
