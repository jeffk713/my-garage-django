import {
  vehicleActionTypes,
  vehicleNoteActionTypes,
  vehicleServiceActionTypes,
} from './vehicle-action-type';

import {
  getVehiclesWithUpdatedVehicleNote,
  getVehiclesWithNewService,
} from './vehicle-reducer-utils';

const INITIAL_STATE = {
  vehicles: [],
  isLoading: false,
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case vehicleActionTypes.GET_VEHICLES_START:
    case vehicleActionTypes.ADD_VEHICLE_START:
    case vehicleServiceActionTypes.ADD_SERVICE_START:
    case vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_START:
      return {
        ...state,
        isLoading: true,
      };
    case vehicleActionTypes.GET_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        isLoading: false,
      };
    case vehicleActionTypes.ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
        isLoading: false,
      };
    case vehicleServiceActionTypes.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        vehicles: getVehiclesWithNewService(state.vehicles, action.payload),
        isLoading: false,
      };
    case vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_SUCCESS:
      return {
        ...state,
        vehicles: getVehiclesWithUpdatedVehicleNote(
          state.vehicles,
          action.payload
        ),
        isLoading: false,
      };
    case vehicleActionTypes.GET_VEHICLES_FAIL:
    case vehicleActionTypes.ADD_VEHICLE_FAIL:
    case vehicleServiceActionTypes.ADD_SERVICE_FAIL:
    case vehicleNoteActionTypes.UPDATE_VEHICLE_NOTE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default vehicleReducer;
