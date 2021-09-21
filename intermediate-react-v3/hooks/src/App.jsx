import './App.css'
import React from 'react'
import State from './State'
import Effect from './Effect'
import Context from './Context'
import Ref from './Ref'
import Reducer from './Reducer'
import Memo from './Memo'
import Callback from './Callback'

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
    </div>
  )
}

export default App
