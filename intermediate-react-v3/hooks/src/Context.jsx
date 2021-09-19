import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext([
  {
    firstName: 'Bob',
    lastName: 'Bobberson',
    suffix: 1,
    email: 'bobbobberson@example.com',
  },
  (obj) => obj,
])

function LevelFive() {
  const [user, setUser] = useContext(UserContext)
  const { firstName, lastName, suffix } = user
  return (
    <div>
      <h5>Fifth Level</h5>
      <h5>{`${firstName} ${lastName} the ${suffix} born`}</h5>
      <button
        type="button"
        onClick={() => setUser({ ...user, suffix: suffix + 1 })}
      >
        Increment
      </button>
    </div>
  )
}

function LevelFour() {
  return (
    <div>
      <h4>Fourth Level</h4>
      <LevelFive />
    </div>
  )
}

function LevelThree() {
  return (
    <div>
      <h3>Third Level</h3>
      <LevelFour />
    </div>
  )
}
function LevelTwo() {
  return (
    <div>
      <h2>Second Level</h2>
      <LevelThree />
    </div>
  )
}
export default function Context() {
  const userState = useState({
    firstName: 'James',
    lastName: 'Jameson',
    suffix: 1,
    email: 'jamesjameson@example.com',
  })

  return (
    <UserContext.Provider value={userState}>
      <div>
        <h1>First level</h1>
        <LevelTwo />
      </div>
    </UserContext.Provider>
  )
}
