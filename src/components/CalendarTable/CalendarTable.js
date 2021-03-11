import React from 'react'
import CalendarTableRow from './CalendarTableRow'

import {CalendarTableWrapper} from './style'

const CalendarTable = ({meetings, getAllMeetings}) => (
  <CalendarTableWrapper>
    <CalendarTableRow firstRow />
    <CalendarTableRow meetings={meetings} getAllMeetings={getAllMeetings} />
  </CalendarTableWrapper>
)

export default CalendarTable