import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Switch, Route, useHistory} from 'react-router-dom'
import {CalendarPage, CreateEditMeetingPage, MeetingInfoPage} from 'pages'
import {getAllMeetings, getAllUsers, login} from './redux'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  useEffect(() => {
    if (!activeUser) {
      history.push('/')
    } else {
      dispatch(login())
    }
  }, [activeUser])

  useEffect(() => {
    if (activeUser) {
      dispatch(getAllMeetings())
    }

    dispatch(getAllUsers())
  }, [])

  return (
    <Switch>
      <Route path="/meeting-info" component={MeetingInfoPage} />
      <Route path="/edit-meeting" render={() => <CreateEditMeetingPage editForm />} />
      <Route path="/create-meeting" component={CreateEditMeetingPage} />
      <Route path="/" component={CalendarPage} />
    </Switch>
  )
}

export default App
