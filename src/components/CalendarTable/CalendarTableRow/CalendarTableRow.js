import React from 'react'
import CalendarTableCol from './CalendarTableCol'

import {FirstRowCell, CalendarTableRowWrapper} from './style'

const CalendarTableRow = ({firstRow}) => {
  const tableHeader = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  return (
    <CalendarTableRowWrapper>
      {tableHeader.map(item => {
        if (firstRow) {
          return <FirstRowCell key={item}>{item}</FirstRowCell>
        } else {
          return (
            <CalendarTableCol
              key={item}
              day={item} />
          )
        }
      })}
    </CalendarTableRowWrapper>
  )
}

export default CalendarTableRow