import {serverEventsMethods} from 'serverCommunication'
import {createFormData} from './formData'

const createNewMeeting = (formData, getAllMeetings, history) => {
  serverEventsMethods.addNewMeeting(formData)
    .then(getAllMeetings)
    .then(() => history.push('/'))
}

const editMeetingFnc = (formData, meetingId, getAllMeetings, history) => {
  serverEventsMethods.editMeetingInfo(formData, meetingId)
    .then(getAllMeetings)
    .then(() => history.push('/'))
}

export const confirmMeetingCreationOrChange = (
  controls,
  setIsCreateEditMeetingErrorMessageVisible,
  setControls,
  getAllMeetings,
  meetings,
  history,
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
      : meetings.length
        ? meetings.filter(meeting => meeting.data.id === formData.id)
        : []

    if (meetings.length && !bookedTimeSlot.length) {
      if (!editMeeting) {
        createNewMeeting(formData, getAllMeetings, history)
      } else {
        editMeetingFnc(formData, editMeeting.id, getAllMeetings, history)
      }
    } else if (meetings.length && bookedTimeSlot.length) {
      setIsCreateEditMeetingErrorMessageVisible(true)
    } else if (!meetings.length) {
      if (!editMeeting) {
        createNewMeeting(formData, getAllMeetings, history)
      } else {
        editMeetingFnc(formData, editMeeting.id, getAllMeetings, history)
      }
    }
  }

  setControls(fields)
}