import React, {useState} from 'react'
import {Modal, Select, Button} from 'components/UI'

import {AuthMessage, UsersSelectWrapper, ConfirmAuthButtonWrapper} from './style'

const AuthModal = ({show, users, setIsLoggedIn}) => {
  const [selectedUser, setSelectedUser] = useState('Ann')

  const authHandler = () => {
    users.filter(user => {
      if (user.name === selectedUser) {
        localStorage.setItem('activeUser', JSON.stringify(user))
        setIsLoggedIn(true)
      }
    })
  }

  const selectUserHandler = (event) => {
    setSelectedUser(event.target.value)
  }

  return (
    <Modal show={show}>
      <AuthMessage>Please authorise</AuthMessage>
      <UsersSelectWrapper>
        <Select
          optionsArr={users}
          onChange={selectUserHandler} />
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