import React, {useEffect, useState} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import {CalendarPage, CreateEditMeetingPage, MeetingInfoPage} from 'pages'
import {serverEventsMethods} from 'serverCommunication'

const App = () => {
  const history = useHistory()
  const activeUser = localStorage.getItem('activeUser')
  const [users, setUsers] = useState()
  const [allMeetings, setAllMeetings] = useState()
  const [meetings, setMeetings] = useState()

  useEffect(() => {
    if (!activeUser) {
      history.push('/')
    }
  }, [activeUser])

  useEffect(() => {
    serverEventsMethods.getAllUsers()
      .then(res => setUsers(res))
  }, [])

  const getAllMeetings = () => {
    serverEventsMethods.getAllMeetings()
      .then(res => {
        setMeetings(res)
        setAllMeetings(res)
      })
  }

  const filterMeetings = (filteredArr) => setMeetings(filteredArr)

  return (
    <Switch>
      <Route path="/meeting-info" component={MeetingInfoPage} />
      <Route path="/edit-meeting">
        <CreateEditMeetingPage
          editForm
          users={users}
          meetings={meetings}
          getAllMeetings={getAllMeetings}
        />
      </Route>
      <Route path="/create-meeting">
        <CreateEditMeetingPage
          users={users}
          meetings={meetings}
          getAllMeetings={getAllMeetings}
        />
      </Route>
      <Route path="/">
        <CalendarPage
          users={users}
          meetings={meetings}
          allMeetings={allMeetings}
          getAllMeetings={getAllMeetings}
          filterMeetings={filterMeetings} />
      </Route>
    </Switch>
  )
}

export default App
