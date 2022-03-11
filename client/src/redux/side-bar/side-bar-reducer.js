import { sideBarActionTypes } from './side-bar-action-types';

const INITIAL_STATE = {
  display: false,
};

const sideBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sideBarActionTypes.TOGGLE_SIDE_BAR:
      return {
        ...state,
        display: !state.display,
      };
    case sideBarActionTypes.HIDE_SIDE_BAR:
      return {
        ...state,
        display: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sideBarReducer;
