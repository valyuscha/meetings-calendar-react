import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'components/UI'
import {logout, hideConfirmLogoutModal, setAllMeetings, setFilteredMeetings} from '../../redux'

import {ConfirmLogoutMessage, ConfirmButtonsWrapper, ConfirmButtonWrapper} from './style'

const ConfirmLogoutModal = () => {
  const dispatch = useDispatch()
  const {isConfirmLogoutModalVisible} = useSelector(({modals}) => modals)

  const confirmLogout = () => {
    localStorage.removeItem('activeUser')
    dispatch(logout())
    dispatch(setAllMeetings([]))
    dispatch(setFilteredMeetings([]))
    dispatch(hideConfirmLogoutModal())
  }

  return (
    <Modal show={isConfirmLogoutModalVisible}>
      <ConfirmLogoutMessage>
        Do you really want to logout?
      </ConfirmLogoutMessage>
      <ConfirmButtonsWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={() => dispatch(hideConfirmLogoutModal())}>
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