import {
  GET_ALL_MEETINGS,
  GET_FILTERED_MEETINGS,
  CHOOSE_MEETING_FOR_DELETING
} from '../actionTypes'

const initialState = {
  filteredMeetings: [],
  allMeetings: [],
  chosenMeetingForDeleting: {}
}

export const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEETINGS:
      return {...state, allMeetings: action.payload}
    case GET_FILTERED_MEETINGS:
      return {...state, filteredMeetings: action.payload}
    case CHOOSE_MEETING_FOR_DELETING:
      return {...state, chosenMeetingForDeleting: action.payload}
    default:
      return state
  }
}