import React from 'react'
import CalendarTableRow from './CalendarTableRow'

import {CalendarTableWrapper} from './style'

const CalendarTable = () => (
  <CalendarTableWrapper>
    <CalendarTableRow firstRow />
    <CalendarTableRow />
  </CalendarTableWrapper>
)

export default CalendarTable