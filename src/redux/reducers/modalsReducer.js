import {
  SHOW_CONFIRM_LOGOUT_MODAL,
  HIDE_CONFIRM_LOGOUT_MODAL,
  SHOW_CONFIRM_DELETE_MEETING_MODAL,
  HIDE_CONFIRM_DELETE_MEETING_MODAL,
  SHOW_CREATE_EDIT_ERROR_MESSAGE,
  HIDE_CREATE_EDIT_ERROR_MESSAGE
} from '../actionTypes'

const initialState = {
  isConfirmLogoutModalVisible: false,
  isConfirmDeleteMeetingModalVisible: false,
  isCreateEditMeetingErrorMessageVisible: false
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: true}
    case HIDE_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: false}
    case SHOW_CONFIRM_DELETE_MEETING_MODAL:
      return {...state, isConfirmDeleteMeetingModalVisible: true}
    case HIDE_CONFIRM_DELETE_MEETING_MODAL:
      return {...state, isConfirmDeleteMeetingModalVisible: false}
    case SHOW_CREATE_EDIT_ERROR_MESSAGE:
      return {...state, isCreateEditMeetingErrorMessageVisible: true}
    case HIDE_CREATE_EDIT_ERROR_MESSAGE:
      return {...state, isCreateEditMeetingErrorMessageVisible: false}
    default:
      return state
  }
}