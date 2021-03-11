import React from 'react'
import {time} from 'server'
import CalendarTableCell from './CalendarTableCell'

import {
  CalendarTableColWrapper
} from './style'

const CalendarTableCol = ({day, meetings, getAllMeetings}) => (
  <CalendarTableColWrapper>
    {time.map(item => (
      <CalendarTableCell
        key={[item, day].join(' ')}
        day={day}
        time={item}
        meetings={meetings}
        getAllMeetings={getAllMeetings} />
    ))}
  </CalendarTableColWrapper>
)

export default CalendarTableCol