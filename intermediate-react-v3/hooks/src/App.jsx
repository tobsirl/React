import './App.css'
import React from 'react'
import State from './State'
import Effect from './Effect'
import Context from './Context'
import Ref from './Ref'

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
    </div>
  )
}

export default App
