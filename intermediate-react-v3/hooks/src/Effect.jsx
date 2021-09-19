import React, { useState, useEffect, useRef } from 'react'

export default function Effect() {
  const [time, setTime] = useState(new Date())
  const [delay, setDelay] = useState(1000)
  const timer = useRef(0)

  useEffect(() => {
    timer.current = setTimeout(() => setTime(new Date()), delay)
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
