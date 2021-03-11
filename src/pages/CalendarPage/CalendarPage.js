import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {CalendarTable} from 'components'
import {Button, Select} from 'components/UI'
import {serverEventsMethods} from 'serverCommunication'

import {
  CalendarPageWrapper,
  Header,
  Title,
  CalendarTools,
  LogoutButtonWrapper,
  SelectWrapper,
  AddNewMeetingButtonWrapper
} from './style'

const CalendarPage = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [allMeetings, setAllMeetings] = useState([])
  const [meetings, setMeetings] = useState([])

  const getAllMeetings = () => {
    serverEventsMethods.getAllMeetings()
      .then(res => {
        setMeetings(res)
        setAllMeetings(res)
      })
  }

  useEffect(() => {
    getAllMeetings()
  }, [])

  useEffect(() => {
    serverEventsMethods.getAllUsers()
      .then(res => setUsers(res))
  }, [])

  const selectUserHandler = (event) => {
    const {value} = event.target

    if (value !== 'All members') {
      const filteredMeetingsArrByParticipants = allMeetings.filter((meeting) => {
        if (meeting.data.participants.includes(value)) {
          return meeting
        }
      })

      setMeetings(filteredMeetingsArrByParticipants)
    } else {
      setMeetings(allMeetings)
    }
  }

  return (
    <CalendarPageWrapper>
      <Header>
        <Title>Calendar</Title>
        <CalendarTools>
          <LogoutButtonWrapper>
            <Button btnType="secondary">Logout</Button>
          </LogoutButtonWrapper>
          <SelectWrapper>
            <Select
              optionsArr={users}
              extraOption="All members"
              onChange={selectUserHandler} />
          </SelectWrapper>
          <AddNewMeetingButtonWrapper activeUser={activeUser}>
            <Button
              btnType="secondary"
              onClick={() => history.push('/add-new-meeting')}>
              New event +
            </Button>
          </AddNewMeetingButtonWrapper>
        </CalendarTools>
      </Header>
      <CalendarTable meetings={meetings} getAllMeetings={getAllMeetings} />
    </CalendarPageWrapper>
  )
}

export default CalendarPage