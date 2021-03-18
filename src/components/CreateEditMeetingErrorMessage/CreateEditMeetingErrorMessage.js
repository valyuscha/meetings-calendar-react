import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {errorIcon, hideErrorMessage} from 'assets'
import {hideCreateEditMeetingErrorMessage} from '../../redux'

import {
  CreateEditMeetingErrorMessageWrapper,
  MessageWrapper,
  ErrorIcon,
  Message,
  HideMessageButton,
  HideMessageIcon
} from './style'

const CreateEditMeetingErrorMessage = () => {
  const dispatch = useDispatch()
  const {isCreateEditMeetingErrorMessageVisible} = useSelector(({modals}) => modals)

  return (
    <CreateEditMeetingErrorMessageWrapper show={isCreateEditMeetingErrorMessageVisible}>
      <MessageWrapper>
        <ErrorIcon src={errorIcon} />
        <Message>Failed to create an event. Time slot is already booked.</Message>
      </MessageWrapper>
      <HideMessageButton onClick={() => dispatch(hideCreateEditMeetingErrorMessage())}>
        <HideMessageIcon src={hideErrorMessage} />
      </HideMessageButton>
    </CreateEditMeetingErrorMessageWrapper>
  )
}

export default CreateEditMeetingErrorMessage