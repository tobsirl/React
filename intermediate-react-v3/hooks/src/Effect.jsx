import React, { useState, useEffect } from 'react'

export default function Effect() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000)
    return () => clearTimeout(timer)
  }, [time])

  return (
    <div>
      <h1>useEffect Example: {time.toLocaleTimeString()}</h1>
    </div>
  )
}
