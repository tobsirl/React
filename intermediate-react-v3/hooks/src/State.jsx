import React, { useState } from 'react'

export default function State() {
  const [isGreen, setIsGreen] = useState(true)

  function handleKeyDown(event) {
    console.log('here :>>', event.code)
    setIsGreen(!isGreen)
  }

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}
        onKeyDown={(event) => handleKeyDown(event)}
        role="presentation"
      >
        useState Example
      </h1>
    </div>
  )
}
