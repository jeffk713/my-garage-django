import { notificationActionTypes } from './notification-action-types';

export const displaySuccessNotification = messageArr => ({
  type: notificationActionTypes.DISPLAY_SUCCESS_NOTIFICATION,
  payload: messageArr,
});

export const displayErrorNotification = messageArr => ({
  type: notificationActionTypes.DISPLAY_ERROR_NOTIFICATION,
  payload: messageArr,
});

export const hideNotification = () => ({
  type: notificationActionTypes.HIDE_NOTIFICATION,
});
