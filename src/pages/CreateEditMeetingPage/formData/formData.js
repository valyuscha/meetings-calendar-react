export const createFormData = (eventName, selectedDay, selectedTime, participants, id) => {
  const formData = {}
  formData.meetingName = eventName
  formData.selectedDay = selectedDay
  formData.selectedTime = selectedTime
  formData.participants = participants
  formData.id = id
  return formData
}