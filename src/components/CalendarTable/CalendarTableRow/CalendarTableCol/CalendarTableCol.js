import React from 'react'
import {time} from 'server'
import CalendarTableCell from './CalendarTableCell'

import {
  CalendarTableColWrapper
} from './style'

const CalendarTableCol = ({day}) => (
  <CalendarTableColWrapper>
    {time.map(item => (
      <CalendarTableCell
        key={[item.name, day].join(' ')}
        day={day}
        time={item.name} />
    ))}
  </CalendarTableColWrapper>
)

export default CalendarTableCol