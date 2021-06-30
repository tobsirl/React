import React, { useState, useContext } from 'react'
import './App.css'
import Header from './components/Header'
import { UserContext } from './context/userContext'

function App() {
  const [username, setUsername] = useState('')
  const [usernameContext, changeUsername] = useContext(UserContext)

  return (
    <div>
      <Header />
      <main>
        <p className="main">No new notifications, {usernameContext}! 🎉</p>
      </main>

      <input
        type="text"
        name="username"
        placeholder="New username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={() => changeUsername(username)}>Change Username</button>
    </div>
  )
}

export default App

/**
 * Challenge: Add the ability for the user to choose a new username
 *
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 *
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 *
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
 */
