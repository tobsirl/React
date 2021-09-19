import React from 'react'

function LevelFive() {
  return (
    <div>
      <h5>Fifth Level</h5>
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
  return (
    <div>
      <h1>First level</h1>
      <LevelTwo />
    </div>
  )
}
