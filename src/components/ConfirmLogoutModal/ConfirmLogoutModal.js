import React from 'react'
import {Modal, Button} from 'components/UI'

import {ConfirmLogoutMessage, ConfirmButtonsWrapper, ConfirmButtonWrapper} from './style'

const ConfirmLogoutModal = ({show, setLogoutModalVisibility, setIsLoggedIn}) => {
  const cancelLogout = () => {
    setLogoutModalVisibility(false)
  }

  const confirmLogout = () => {
    localStorage.removeItem('activeUser')
    setIsLoggedIn(false)
    setLogoutModalVisibility(false)
  }

  return (
    <Modal show={show}>
      <ConfirmLogoutMessage>
        Do you really want to logout?
      </ConfirmLogoutMessage>
      <ConfirmButtonsWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={cancelLogout}>
            No
          </Button>
        </ConfirmButtonWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={confirmLogout}>
            Yes
          </Button>
        </ConfirmButtonWrapper>
      </ConfirmButtonsWrapper>
    </Modal>
  )
}

export default ConfirmLogoutModal