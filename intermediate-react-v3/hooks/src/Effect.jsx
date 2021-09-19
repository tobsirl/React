import React, { useState, useEffect } from 'react'

export default function Effect() {
  const [time, setTime] = useState(new Date())
  const [delay, setDelay] = useState(1000)
  let timer

  useEffect(() => {
    timer = setTimeout(() => setTime(new Date()), delay)
    // return () => clearTimeout(timer)
  }, [delay, time])

  function stopTimer() {
    clearTimeout(timer)
    setDelay(null)
  }

  function handleKeyDown() {}

  return (
    <div>
      <h1
        onClick={stopTimer}
        onKeyDown={(event) => handleKeyDown(event)}
        role="presentation"
      >
        useEffect Example: {time.toLocaleTimeString()}
      </h1>
    </div>
  )
}
