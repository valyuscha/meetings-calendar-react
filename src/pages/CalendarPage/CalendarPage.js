import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Ellipsis} from 'react-awesome-spinners'
import {Button, Select, Loader} from 'components/UI'

import {
  CalendarTable,
  AuthModal,
  ConfirmLogoutModal,
  ConfirmDeleteMeetingModal
} from 'components'

import {setFilteredMeetings, showConfirmLogoutModal} from '../../redux'

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
  const dispatch = useDispatch()
  const history = useHistory()
  const {isLoading} = useSelector(({loader}) => loader)
  const {allMeetings} = useSelector(({meetings}) => meetings)
  const {usersList} = useSelector(({users}) => users)
  const {isLoggedIn} = useSelector(({auth}) => auth)

  const selectUserHandler = (event) => {
    const {value} = event.target

    if (value !== 'All members') {
      const filteredMeetingsArrByParticipants = allMeetings.filter((meeting) => {
        if (meeting.data.participants.includes(value)) {
          return meeting
        }
      })

      dispatch(setFilteredMeetings(filteredMeetingsArrByParticipants))
    } else {
      dispatch(setFilteredMeetings(allMeetings))
    }
  }

  return (
    <CalendarPageWrapper>
      {!isLoading ? (
        <>
          <Header>
            <Title>Calendar</Title>
            <CalendarTools>
              <LogoutButtonWrapper>
                <Button
                  btnType="secondary"
                  onClick={() => dispatch(showConfirmLogoutModal())}>
                  Logout
                </Button>
              </LogoutButtonWrapper>
              <SelectWrapper>
                <Select
                  optionsArr={usersList}
                  extraOption="All members"
                  onChange={selectUserHandler} />
              </SelectWrapper>
              <AddNewMeetingButtonWrapper isLoggedIn={isLoggedIn} activeUser={activeUser}>
                <Button
                  btnType="secondary"
                  onClick={() => history.push('/create-meeting')}>
                  New event +
                </Button>
              </AddNewMeetingButtonWrapper>
            </CalendarTools>
          </Header>
          <CalendarTable />
          <AuthModal />
          <ConfirmLogoutModal />
          <ConfirmDeleteMeetingModal />
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