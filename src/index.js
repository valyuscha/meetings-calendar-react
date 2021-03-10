import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Fonts from './fonts'
import GlobalStyles from './globalStyles'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/*<Fonts />*/}
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
