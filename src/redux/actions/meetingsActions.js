import {serverEventsMethods} from 'serverCommunication'
import {hideConfirmDeleteMeetingModal} from './modalsActions'
import {startLoading, stopLoading} from './loaderActions'
import {
  GET_ALL_MEETINGS,
  GET_FILTERED_MEETINGS,
  CHOOSE_MEETING_FOR_DELETING
} from '../actionTypes'

export const setAllMeetings = (meetings) => {
  return {
    type: GET_ALL_MEETINGS,
    payload: meetings
  }
}

export const setFilteredMeetings = (meetings) => {
  return {
    type: GET_FILTERED_MEETINGS,
    payload: meetings
  }
}

export const getAllMeetings = () => {
  return async dispatch => {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'))
    dispatch(startLoading())
    const allMeetings = await serverEventsMethods.getAllMeetings()

    if (
      activeUser.canUserCreateMeeting
      && activeUser.canUserDeleteMeeting
      && activeUser.canUserEditMeetingInfo
    ) {
      dispatch(setAllMeetings(allMeetings))
      dispatch(setFilteredMeetings(allMeetings))
    } else {
      const userAssignedMeetings = allMeetings.filter(meeting => {
        return meeting.data.participants.includes(activeUser.name)
      })

      dispatch(setAllMeetings(userAssignedMeetings))
      dispatch(setFilteredMeetings(userAssignedMeetings))
    }

    dispatch(stopLoading())
  }
}

export const createNewMeeting = (formData) => {
  return async dispatch => {
    await serverEventsMethods.addNewMeeting(formData)
    dispatch(getAllMeetings())
  }
}

export const editMeeting = (formData, meetingId) => {
  return async dispatch => {
    await serverEventsMethods.editMeetingInfo(formData, meetingId)
    dispatch(getAllMeetings())
  }
}

export const chooseMeetingForDeleting = (meeting) => {
  return {
    type: CHOOSE_MEETING_FOR_DELETING,
    payload: meeting
  }
}

export const deleteMeeting = (meeting) => {
  return async dispatch => {
    serverEventsMethods.deleteMeeting(meeting)
      .then(() => dispatch(getAllMeetings()))
      .then(() => dispatch(hideConfirmDeleteMeetingModal()))
  }
}