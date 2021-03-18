import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Ellipsis} from 'react-awesome-spinners'
import {CreateEditMeetingErrorMessage} from 'components'
import {Input, Select, Checkboxes, Button, Loader} from 'components/UI'
import {days, time} from 'server'
import {getFormData} from './getFomData'
import {confirmMeetingCreationOrChange} from './confirmMeetingCreationOrChange'
import {getAllMeetings, hideCreateEditMeetingErrorMessage} from '../../redux'

import {
  CreateEditMeetingPageWrapper,
  Title,
  Form,
  CheckboxesWrapper,
  CheckboxesTitle,
  ConfirmMeetingCreationButtons,
  ConfirmMeetingCreationButtonWrapper
} from './style'

const CreateEditMeetingPage = ({editForm}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {usersList} = useSelector(({users}) => users)
  const {allMeetings} = useSelector(({meetings}) => meetings)
  const {isLoading} = useSelector(({loader}) => loader)
  const {isCreateEditMeetingErrorMessageVisible} = useSelector(({modals}) => modals)

  const editMeeting = JSON.parse(localStorage.getItem('editMeeting'))
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  const [controls, setControls] = useState({
    meetingName: {
      value: editForm ? editMeeting.data.meetingName : '',
      isValid: !!editForm,
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
        value: editForm ? editMeeting.data.selectedDay : 'Monday'
      },
      timeSelect: {
        name: 'Time',
        value: editForm ? editMeeting.data.selectedTime : '10:00'
      }
    },
    participants: {
      checkedParticipants: editForm ? editMeeting.data.participants : [],
      isValid: !!editForm,
      isTouched: false
    }
  })

  useEffect(() => {
    dispatch(getAllMeetings())

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
    dispatch(hideCreateEditMeetingErrorMessage())
  }

  const createOrEditMeeting = () => {
    if (!editForm) {
      confirmMeetingCreationOrChange(
        controls,
        setControls,
        allMeetings,
        history,
        dispatch
      )
    } else {
      confirmMeetingCreationOrChange(
        controls,
        setControls,
        allMeetings,
        history,
        dispatch,
        editMeeting
      )
    }
  }

  return (
    <CreateEditMeetingPageWrapper
      isCreateEditMeetingErrorMessageVisible={isCreateEditMeetingErrorMessageVisible}>
      {!isLoading ? (
        <>
          <Title>{editForm ? 'Edit' : 'Create new'} meeting</Title>
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
                checkboxesList={usersList}
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
                {editForm ? 'Edit' : 'Create'}
              </Button>
            </ConfirmMeetingCreationButtonWrapper>
          </ConfirmMeetingCreationButtons>
          <CreateEditMeetingErrorMessage />
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