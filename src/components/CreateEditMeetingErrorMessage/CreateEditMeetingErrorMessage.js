import React from 'react'
import {errorIcon, hideErrorMessage} from 'assets'

import {
  CreateEditMeetingErrorMessageWrapper,
  MessageWrapper,
  ErrorIcon,
  Message,
  HideMessageButton,
  HideMessageIcon
} from './style'

const CreateEditMeetingErrorMessage = (props) => {
  const closeErrorMessage = () => {
    props.setIsCreateEditMeetingErrorMessageVisible(false)
  }

  return (
    <CreateEditMeetingErrorMessageWrapper show={props.show}>
      <MessageWrapper>
        <ErrorIcon src={errorIcon} />
        <Message>Failed to create an event. Time slot is already booked.</Message>
      </MessageWrapper>
      <HideMessageButton onClick={closeErrorMessage}>
        <HideMessageIcon src={hideErrorMessage} />
      </HideMessageButton>
    </CreateEditMeetingErrorMessageWrapper>
  )
}

export default CreateEditMeetingErrorMessage