import React, {useEffect, useState, createContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Ellipsis} from 'react-awesome-spinners'
import {Button, Select, Loader} from 'components/UI'

import {
  CalendarTable,
  AuthModal,
  ConfirmLogoutModal,
  ConfirmDeleteMeetingModal
} from 'components'
import { serverEventsMethods } from '../../serverCommunication'

import {
  CalendarPageWrapper,
  Header,
  Title,
  CalendarTools,
  LogoutButtonWrapper,
  SelectWrapper,
  AddNewMeetingButtonWrapper
} from './style'

export const MeetingsList = createContext()
export const ConfirmDeleteMeetingModalVisibility = createContext()
export const DeleteMeeting = createContext()

const CalendarPage = (props) => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(!!activeUser)
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  const [isDeleteMeetingModalVisible, setIsDeleteMeetingModalVisible] = useState(false)
  const [chosenMeetingForDeleting, setChosenMeetingForDeleting] = useState([])
  const [isUserDeletingMeeting, setIsUserDeletingMeeting] = useState(false)

  useEffect(() => {
    let cleanupFunction = false

    if (!cleanupFunction) {
      props.getAllMeetings()
    }

    return () => {
      cleanupFunction = true
    }
  }, [])

  const selectUserHandler = (event) => {
    const {value} = event.target

    if (value !== 'All members') {
      const filteredMeetingsArrByParticipants = props.allMeetings.filter((meeting) => {
        if (meeting.data.participants.includes(value)) {
          return meeting
        }
      })

      props.filterMeetings(filteredMeetingsArrByParticipants)
    } else {
      props.filterMeetings(props.allMeetings)
    }
  }

  return (
    <CalendarPageWrapper>
      {props.meetings && props.users && !isUserDeletingMeeting ? (
        <>
          <Header>
            <Title>Calendar</Title>
            <CalendarTools>
              <LogoutButtonWrapper>
                <Button
                  btnType="secondary"
                  onClick={() => setIsLogoutModalVisible(true)}>
                  Logout
                </Button>
              </LogoutButtonWrapper>
              <SelectWrapper>
                <Select
                  optionsArr={props.users}
                  extraOption="All members"
                  onChange={selectUserHandler} />
              </SelectWrapper>
              <AddNewMeetingButtonWrapper activeUser={activeUser}>
                <Button
                  btnType="secondary"
                  onClick={() => history.push('/create-meeting')}>
                  New event +
                </Button>
              </AddNewMeetingButtonWrapper>
            </CalendarTools>
          </Header>
          <MeetingsList.Provider value={props.meetings}>
            <ConfirmDeleteMeetingModalVisibility.Provider
              value={setIsDeleteMeetingModalVisible}>
              <DeleteMeeting.Provider value={setChosenMeetingForDeleting}>
                <CalendarTable />
              </DeleteMeeting.Provider>
            </ConfirmDeleteMeetingModalVisibility.Provider>
          </MeetingsList.Provider>
          <AuthModal
            show={!isLoggedIn}
            users={props.users}
            setIsLoggedIn={setIsLoggedIn} />
          <ConfirmLogoutModal
            show={isLogoutModalVisible}
            setIsLoggedIn={setIsLoggedIn}
            setLogoutModalVisibility={setIsLogoutModalVisible} />
          <ConfirmDeleteMeetingModal
            show={isDeleteMeetingModalVisible}
            getAllMeetings={props.getAllMeetings}
            meeting={chosenMeetingForDeleting}
            setIsDeleteMeetingModalVisible={setIsDeleteMeetingModalVisible}
            userIsDeletingMeeting={setIsUserDeletingMeeting} />
        </>
      ) : (
        <Loader>
          <Ellipsis />
        </Loader>
      )}
    </CalendarPageWrapper>
  )
}

export default CalendarPage