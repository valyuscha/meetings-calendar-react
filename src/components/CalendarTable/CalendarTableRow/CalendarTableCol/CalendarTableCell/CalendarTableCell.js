import React from 'react'
import {serverEventsMethods} from 'serverCommunication'
import {deleteMeeting} from 'assets'

import {
  Cell,
  TimeCell,
  CellContent,
  MeetingName,
  DeleteMeetingButton,
  DeleteIcon
} from './style'

const CalendarTableCell = ({day, meetings, time, getAllMeetings}) => {
  const meeting = meetings.filter(item => item.data.id === [time, day].join(' '))

  const deleteMeetingHandler = () => {
    serverEventsMethods.deleteMeeting(meeting)
      .then(serverEventsMethods.getAllMeetings)
      .then(getAllMeetings)
  }

  return (
    <Cell id={[time, day].join(' ')}>
      {day === 'Name' ? <TimeCell>{time}</TimeCell> : meeting.length ? (
        <CellContent>
          <MeetingName>{meeting[0].data.meetingName}</MeetingName>
          <DeleteMeetingButton
            id={meeting[0].data.id}
            onClick={deleteMeetingHandler}>
            <DeleteIcon src={deleteMeeting} />
          </DeleteMeetingButton>
        </CellContent>
      ) : ''}
    </Cell>
  )
}

export default CalendarTableCell