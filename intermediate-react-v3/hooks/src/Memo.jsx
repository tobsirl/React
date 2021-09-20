/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react'

function fibonacci(n) {
  if (n <= 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}
export default function Memo() {
  const [num, setNum] = useState(1)
  const [isGreen, setIsGreen] = useState(true)
  const fib = useMemo(() => fibonacci(num), [num])

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button type="button" onClick={() => setNum(num + 1)}>
        ➕
      </button>
    </div>
  )
}
