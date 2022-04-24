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

export const updateVehicleServiceStart = () => ({
  type: vehicleServiceActionTypes.UPDATE_SERVICE_START,
});

export const updateVehicleServiceSuccess = newService => ({
  type: vehicleServiceActionTypes.UPDATE_SERVICE_SUCCESS,
  payload: newService,
});

export const updateVehicleServiceFail = () => ({
  type: vehicleServiceActionTypes.UPDATE_SERVICE_FAIL,
});

export const deleteVehicleServiceStart = () => ({
  type: vehicleServiceActionTypes.DELETE_SERVICE_START,
});

export const deleteVehicleServiceSuccess = (vehicleId, serviceId) => ({
  type: vehicleServiceActionTypes.DELETE_SERVICE_SUCCESS,
  payload: { vehicle: vehicleId, id: serviceId },
});

export const deleteVehicleServiceFail = () => ({
  type: vehicleServiceActionTypes.DELETE_SERVICE_FAIL,
});
