import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Ellipsis} from 'react-awesome-spinners'
import {CreateEditMeetingErrorMessage} from 'components'
import {Input, Select, Checkboxes, Button, Loader} from 'components/UI'
import {days, time} from 'server'
import {getFormData} from './getFomData'
import {confirmMeetingCreationOrChange} from './confirmMeetingCreationOrChange'

import {
  CreateEditMeetingPageWrapper,
  Title,
  Form,
  CheckboxesWrapper,
  CheckboxesTitle,
  ConfirmMeetingCreationButtons,
  ConfirmMeetingCreationButtonWrapper
} from './style'

const CreateEditMeetingPage = (props) => {
  const history = useHistory()
  const editMeeting = JSON.parse(localStorage.getItem('editMeeting'))
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  const [
    isCreateEditMeetingErrorMessageVisible,
    setIsCreateEditMeetingErrorMessageVisible
  ] = useState(false)

  const [controls, setControls] = useState({
    meetingName: {
      value: props.editForm ? editMeeting.data.meetingName : '',
      isValid: !!props.editForm,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true,
        minLength: 2
      }
    },
    selectControls: {
      daysSelect: {
        name: 'Day',
        value: props.editForm ? editMeeting.data.selectedDay : 'Monday'
      },
      timeSelect: {
        name: 'Time',
        value: props.editForm ? editMeeting.data.selectedTime : '10:00'
      }
    },
    participants: {
      checkedParticipants: props.editForm ? editMeeting.data.participants : [],
      isValid: !!props.editForm,
      isTouched: false
    }
  })

  useEffect(() => {
    props.getAllMeetings()

    if (!activeUser.canUserEditMeetingInfo && !activeUser.canUserCreateMeeting) {
      history.push('/')
    }
  }, [])

  const changeHandler = (event) => {
    getFormData(event, false, controls, setControls)
  }

  const blurHandler = (event) => {
    getFormData(event, true, controls, setControls)
  }

  const cancelMeetingCreationOrChange = () => {
    history.push('/')
  }

  const createOrEditMeeting = () => {
    if (!props.editForm) {
      confirmMeetingCreationOrChange(
        controls,
        setIsCreateEditMeetingErrorMessageVisible,
        setControls,
        props.getAllMeetings,
        props.meetings,
        history
      )
    } else {
      confirmMeetingCreationOrChange(
        controls,
        setIsCreateEditMeetingErrorMessageVisible,
        setControls,
        props.getAllMeetings,
        props.meetings,
        history,
        editMeeting
      )
    }
  }

  return (
    <CreateEditMeetingPageWrapper
      isCreateEditMeetingErrorMessageVisible={isCreateEditMeetingErrorMessageVisible}>
      {props.users ? (
        <>
          <Title>{props.editForm ? 'Edit' : 'Create new'} meeting</Title>
          <Form>
            <Input
              type="text"
              label="Name of the event:"
              placeholder="Enter the field"
              value={controls.meetingName.value}
              isValid={controls.meetingName.isValid}
              isTouched={controls.meetingName.isTouched}
              errorMessage={controls.meetingName.errorMessage}
              onBlur={blurHandler}
              onChange={changeHandler} />
            <Select
              label="Day:"
              optionsArr={days}
              name={controls.selectControls.daysSelect.name}
              value={controls.selectControls.daysSelect.value}
              onChange={changeHandler} />
            <Select
              label="Time:"
              optionsArr={time}
              name={controls.selectControls.timeSelect.name}
              value={controls.selectControls.timeSelect.value}
              onChange={changeHandler} />
            <CheckboxesWrapper>
              <CheckboxesTitle>Participants:</CheckboxesTitle>
              <Checkboxes
                checkboxesList={props.users}
                checkedItems={controls.participants.checkedParticipants}
                errorMessage="Check at least one participant"
                isValid={controls.participants.isValid}
                isTouched={controls.participants.isTouched}
                onChange={changeHandler} />
            </CheckboxesWrapper>
          </Form>
          <ConfirmMeetingCreationButtons>
            <ConfirmMeetingCreationButtonWrapper>
              <Button
                btnType="primary"
                onClick={cancelMeetingCreationOrChange}>
                Cancel
              </Button>
            </ConfirmMeetingCreationButtonWrapper>
            <ConfirmMeetingCreationButtonWrapper>
              <Button
                btnType="primary"
                onClick={createOrEditMeeting}>
                {props.editForm ? 'Edit' : 'Create'}
              </Button>
            </ConfirmMeetingCreationButtonWrapper>
          </ConfirmMeetingCreationButtons>
          <CreateEditMeetingErrorMessage
            show={isCreateEditMeetingErrorMessageVisible}
            setIsCreateEditMeetingErrorMessageVisible={setIsCreateEditMeetingErrorMessageVisible} />
        </>
      ) : (
        <Loader>
          <Ellipsis />
        </Loader>
      )}
    </CreateEditMeetingPageWrapper>
  )
}

export default CreateEditMeetingPage