import React, { useState, useEffect } from 'react'

export default function Effect() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000)
    return () => clearTimeout(timer)
  }, [time])

  function stopTimer() {
    setTime(new Date())
  }

  function handleKeyDown() {
    
  }

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
