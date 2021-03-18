import {combineReducers} from 'redux'
import {meetingsReducer} from './meetingsReducer'
import {modalsReducer} from './modalsReducer'
import {loaderReducer} from './loaderReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'

export const rootReducer = combineReducers({
  meetings: meetingsReducer,
  modals: modalsReducer,
  loader: loaderReducer,
  users: usersReducer,
  auth: authReducer
})