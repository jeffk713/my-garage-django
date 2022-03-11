import { sideBarActionTypes } from './side-bar-action-types';

export const toggleSideBar = () => ({
  type: sideBarActionTypes.TOGGLE_SIDE_BAR,
});

export const hideSideBar = () => ({
  type: sideBarActionTypes.HIDE_SIDE_BAR,
});
