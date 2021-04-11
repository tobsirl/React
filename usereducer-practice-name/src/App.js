import React, { useReducer } from 'react'
import './App.css'

function nameReducer(state, action) {
  console.log(state.name)
  switch (action.type) {
    case 'SIMON': {
      return {
        name: state.name = 'Simon',
      }
    }

    default:
      throw new Error(`Unsupported action: ${action.type}`)
  }
}

function Names({ initialName = 'Paul' }) {
  const [state, dispatch] = useReducer(nameReducer, { name: initialName })

  function nameChangeSimon() {
    dispatch({ type: 'SIMON' })
  }

  const { name } = state
  return (
    <div>
      <button onClick={nameChangeSimon}>Change Name</button>
      <p>Name: {name}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Names />
    </div>
  )
}

export default App
