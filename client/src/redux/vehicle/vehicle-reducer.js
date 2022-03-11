import { vehicleActionTypes } from './vehicle-action-types';

const INITIAL_STATE = {
  vehicles: [],
  isLoading: false,
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case vehicleActionTypes.UPDATE_VEHICLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case vehicleActionTypes.UPDATE_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        isLoading: false,
      };
    case vehicleActionTypes.UPDATE_VEHICLE_FAIL:
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
