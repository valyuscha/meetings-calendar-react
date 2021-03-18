import {
  SHOW_CONFIRM_LOGOUT_MODAL,
  HIDE_CONFIRM_LOGOUT_MODAL,
  SHOW_CONFIRM_DELETE_MEETING_MODAL,
  HIDE_CONFIRM_DELETE_MEETING_MODAL,
  SHOW_CREATE_EDIT_ERROR_MESSAGE,
  HIDE_CREATE_EDIT_ERROR_MESSAGE
} from '../actionTypes'

export const showConfirmLogoutModal = () => {
  return {
    type: SHOW_CONFIRM_LOGOUT_MODAL
  }
}

export const hideConfirmLogoutModal = () => {
  return {
    type: HIDE_CONFIRM_LOGOUT_MODAL
  }
}

export const showConfirmDeleteMeetingModal = () => {
  return {
    type: SHOW_CONFIRM_DELETE_MEETING_MODAL
  }
}

export const hideConfirmDeleteMeetingModal = () => {
  return {
    type: HIDE_CONFIRM_DELETE_MEETING_MODAL
  }
}

export const showCreateEditMeetingErrorMessage = () => {
  return {
    type: SHOW_CREATE_EDIT_ERROR_MESSAGE
  }
}

export const hideCreateEditMeetingErrorMessage = () => {
  return {
    type: HIDE_CREATE_EDIT_ERROR_MESSAGE
  }
}