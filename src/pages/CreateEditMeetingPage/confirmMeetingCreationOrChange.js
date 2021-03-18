import {createFormData} from './formData'
import {
  createNewMeeting,
  editMeeting as editMeetingFnc,
  hideCreateEditMeetingErrorMessage,
  showCreateEditMeetingErrorMessage
} from '../../redux'

export const confirmMeetingCreationOrChange = (
  controls,
  setControls,
  allMeetings,
  history,
  dispatch,
  editMeeting
) => {
  const fields = {...controls}
  const {meetingName, participants} = fields
  participants.isTouched = true
  meetingName.isTouched = true

  if (meetingName.isValid && participants.isValid) {
    const meetingId = `${controls.selectControls.timeSelect.value} ${controls.selectControls.daysSelect.value.slice(0, 3)}`

    const formData = createFormData(
      controls.meetingName.value,
      controls.selectControls.daysSelect.value,
      controls.selectControls.timeSelect.value,
      controls.participants.checkedParticipants,
      meetingId
    )

    const bookedTimeSlot = editMeeting && editMeeting.data.id === formData.id
      ? []
      : allMeetings.length
        ? allMeetings.filter(meeting => meeting.data.id === formData.id)
        : []

    if (allMeetings.length && !bookedTimeSlot.length || !allMeetings.length) {
      if (!editMeeting) {
        dispatch(createNewMeeting(formData))
        history.push('/')
      } else {
        if (
          editMeeting.data.meetingName === formData.meetingName
          && editMeeting.data.selectedDay === formData.selectedDay
          && editMeeting.data.selectedTime === formData.selectedTime
          && editMeeting.data.participants.join(' ') === formData.participants.join(' ')
        ) {
          history.push('/')
        } else {
          dispatch(editMeetingFnc(formData, editMeeting.id))
          history.push('/')
        }
      }

      dispatch(hideCreateEditMeetingErrorMessage())
    } else if (allMeetings.length && bookedTimeSlot.length) {
      dispatch(showCreateEditMeetingErrorMessage())
    }
  }

  setControls(fields)
}