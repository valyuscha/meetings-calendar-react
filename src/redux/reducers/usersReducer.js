import {GET_USERS} from '../actionTypes'

const initialState = {
  usersList: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, usersList: action.payload}
    default:
      return state
  }
}