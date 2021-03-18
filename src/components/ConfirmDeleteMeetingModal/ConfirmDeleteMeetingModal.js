import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'components/UI'
import {hideConfirmDeleteMeetingModal, deleteMeeting} from '../../redux'

import {
  ModalMessage,
  MeetingNameWrapper,
  MeetingName,
  ConfirmButtonsWrapper,
  ConfirmButtonWrapper
} from './style'

const ConfirmDeleteMeetingModal = () => {
  const dispatch = useDispatch()
  const {chosenMeetingForDeleting} = useSelector(({meetings}) => meetings)
  const {isConfirmDeleteMeetingModalVisible} = useSelector(({modals}) => modals)

  return (
    <Modal show={isConfirmDeleteMeetingModalVisible}>
      <ModalMessage>
        Are you sure you want to delete
        <MeetingNameWrapper>
          "
          <MeetingName>
            {chosenMeetingForDeleting.data && chosenMeetingForDeleting.data.meetingName}
          </MeetingName>
          "
        </MeetingNameWrapper>
      </ModalMessage>
      <ConfirmButtonsWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={() => dispatch(hideConfirmDeleteMeetingModal())}>
            No
          </Button>
        </ConfirmButtonWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={() => dispatch(deleteMeeting(chosenMeetingForDeleting))}>
            Yes
          </Button>
        </ConfirmButtonWrapper>
      </ConfirmButtonsWrapper>
    </Modal>
  )
}

export default ConfirmDeleteMeetingModal