import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteMeeting} from 'assets'
import {chooseMeetingForDeleting, showConfirmDeleteMeetingModal} from '../../../../../redux'

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
  const dispatch = useDispatch()
  const {filteredMeetings} = useSelector(({meetings}) => meetings)

  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  const currentCellMeeting = filteredMeetings && filteredMeetings.filter(item => {
    return item.data.id === [time, day].join(' ')
  })

  const clickHandler = (event) => {
    if (
      event.target.tagName.toLowerCase() === 'button'
      || event.target.tagName.toLowerCase() === 'img'
    ) {
      dispatch(chooseMeetingForDeleting(...currentCellMeeting))
      dispatch(showConfirmDeleteMeetingModal())
    } else {
      localStorage.setItem('editMeeting', JSON.stringify(...currentCellMeeting))
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