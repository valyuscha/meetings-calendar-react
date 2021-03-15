import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {deleteMeeting} from 'assets'
import {
  MeetingsList,
  DeleteMeeting,
  ConfirmDeleteMeetingModalVisibility
} from 'pages/CalendarPage/CalendarPage'

import {
  Cell,
  TimeCell,
  CellContent,
  MeetingName,
  DeleteMeetingButton,
  DeleteIcon
} from './style'

const CalendarTableCell = ({day, time}) => {
  const history = useHistory()
  const allMeetings = useContext(MeetingsList)
  const confirmDeleteMeetingModalVisibility = useContext(ConfirmDeleteMeetingModalVisibility)

  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  const currentCellMeeting = allMeetings && allMeetings.filter(item => {
    return item.data.id === [time, day].join(' ')
  })
  const choseMeetingForDeleting = useContext(DeleteMeeting)

  const clickHandler = (event) => {
    if (
      event.target.tagName.toLowerCase() === 'button'
      || event.target.tagName.toLowerCase() === 'img'
    ) {
      choseMeetingForDeleting(currentCellMeeting)
      confirmDeleteMeetingModalVisibility(true)
    } else {
      localStorage.setItem('editMeeting', JSON.stringify(currentCellMeeting[0]))
      history.push('/meeting-info')
    }
  }

  return (
    <Cell id={[time, day].join(' ')}>
      {day === 'Name'
        ? <TimeCell>{time}</TimeCell>
        : currentCellMeeting.length  ? (
          <CellContent onClick={clickHandler}>
            <MeetingName>{currentCellMeeting[0].data.meetingName}</MeetingName>
            <DeleteMeetingButton
              id={currentCellMeeting[0].data.id}
              activeUser={activeUser}>
              <DeleteIcon src={deleteMeeting} />
            </DeleteMeetingButton>
          </CellContent>
        ) : ''}
    </Cell>
  )
}

export default CalendarTableCell