import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Select, Button} from 'components/UI'
import {login, getAllMeetings} from '../../redux'

import {AuthMessage, UsersSelectWrapper, ConfirmAuthButtonWrapper} from './style'

const AuthModal = () => {
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector(({auth}) => auth)
  const {usersList} = useSelector(({users}) => users)
  const [selectedUser, setSelectedUser] = useState('Ann')

  const authHandler = () => {
    usersList.filter(user => {
      if (user.name === selectedUser) {
        localStorage.setItem('activeUser', JSON.stringify(user))
        dispatch(login())
        dispatch(getAllMeetings())
      }
    })
  }

  return (
    <Modal show={!isLoggedIn}>
      <AuthMessage>Please authorise</AuthMessage>
      <UsersSelectWrapper>
        <Select
          optionsArr={usersList}
          onChange={event => setSelectedUser(event.target.value)} />
      </UsersSelectWrapper>
      <ConfirmAuthButtonWrapper>
        <Button
          btnType="primary"
          onClick={authHandler}>
          Confirm
        </Button>
      </ConfirmAuthButtonWrapper>
    </Modal>
  )
}

export default AuthModal