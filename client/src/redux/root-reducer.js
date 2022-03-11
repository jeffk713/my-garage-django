import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import sideBarReducer from './side-bar/side-bar-reducer';
import vehicleReducer from './vehicle/vehicle-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  sideBar: sideBarReducer,
  vehicle: vehicleReducer,
});

export default rootReducer;
