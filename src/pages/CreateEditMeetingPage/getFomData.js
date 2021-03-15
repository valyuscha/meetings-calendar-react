export const getFormData = (event, isBlurHandler, controls, setControls) => {
  const fields = {...controls}
  const {value, name, id, checked, tagName, type} = event.target
  const {meetingName, participants, selectControls: selectFields} = fields
  const selectControls = Object.values(selectFields).map(select => select)

  if (tagName.toLowerCase() !== 'select' && type !== 'checkbox') {
    meetingName.value = value

    if (isBlurHandler) {
      meetingName.isTouched = true
    }

    meetingName.isValid = meetingName.value.trim().length >= 2

    if (meetingName.value.length === 1) {
      meetingName.errorMessage = 'Event name is too short'
    } else if (meetingName.value.length === 0) {
      meetingName.errorMessage = 'Enter the field'
    }
  }

  selectControls.forEach(select => {
    if (select.name === name) {
      select.value = value
    }
  })

  if (checked) {
    participants.checkedParticipants.push(id)
  }
  participants.isValid = !!participants.checkedParticipants.length

  setControls(fields)
}