import { vehicleServiceActionTypes } from '../vehicle-action-type';

export const addVehicleServiceStart = () => ({
  type: vehicleServiceActionTypes.ADD_SERVICE_START,
});

export const addVehicleServiceSuccess = newService => ({
  type: vehicleServiceActionTypes.ADD_SERVICE_SUCCESS,
  payload: newService,
});

export const addVehicleServiceFail = () => ({
  type: vehicleServiceActionTypes.ADD_SERVICE_FAIL,
});
