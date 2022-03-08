import { sideBarActionTypes } from './side-bar-action-types';

const INITIAL_STATE = {
  display: false,
};

const sideBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sideBarActionTypes.SIDE_BAR_TOGGLE:
      return {
        ...state,
        display: !state.display,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sideBarReducer;
