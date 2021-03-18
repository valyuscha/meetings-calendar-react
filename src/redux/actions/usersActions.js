import {serverEventsMethods} from 'serverCommunication'
import {GET_USERS} from '../actionTypes'
import {startLoading, stopLoading} from './loaderActions'

export const getAllUsers = () => {
  return async dispatch => {
    dispatch(startLoading())
    const users = await serverEventsMethods.getAllUsers()
    dispatch({type: GET_USERS, payload: users})
    dispatch(stopLoading())
  }
}