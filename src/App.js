import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {CalendarPage} from 'pages'

const App = () => (
  <Switch>
    <Route path="/" component={CalendarPage} />
  </Switch>
)

export default App
