import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import UserContext from './userContext'

ReactDOM.render(
  <UserContext.Provider value={'bob123'}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root'),
)
