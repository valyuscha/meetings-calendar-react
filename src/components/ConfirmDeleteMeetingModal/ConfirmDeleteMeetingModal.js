import React from 'react'
import {serverEventsMethods} from 'serverCommunication'
import {Modal, Button} from 'components/UI'

import {
  ModalMessage,
  MeetingNameWrapper,
  MeetingName,
  ConfirmButtonsWrapper,
  ConfirmButtonWrapper
} from './style'

const ConfirmDeleteMeetingModal = (props) => {
  const cancelDeleteMeeting = () => {
    props.setIsDeleteMeetingModalVisible(false)
  }

  const confirmDeleteMeeting = () => {
    props.userIsDeletingMeeting(true)
    serverEventsMethods.deleteMeeting(props.meeting)
      .then(props.getAllMeetings)
      .then(() => props.userIsDeletingMeeting(false))
    props.setIsDeleteMeetingModalVisible(false)
  }

  return (
    <Modal show={props.show}>
      <ModalMessage>
        Are you sure you want to delete
        <MeetingNameWrapper>
          "
          <MeetingName>{props.meeting.length ? props.meeting[0].data.meetingName : 'Event'}</MeetingName>
          "
        </MeetingNameWrapper>
      </ModalMessage>
      <ConfirmButtonsWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={cancelDeleteMeeting}>
            No
          </Button>
        </ConfirmButtonWrapper>
        <ConfirmButtonWrapper>
          <Button
            btnType="primary"
            onClick={confirmDeleteMeeting}>
            Yes
          </Button>
        </ConfirmButtonWrapper>
      </ConfirmButtonsWrapper>
    </Modal>
  )
}

export default ConfirmDeleteMeetingModal