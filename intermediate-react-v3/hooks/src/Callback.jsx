import React, { useState, useEffect, useCallback, memo } from 'react'

// eslint-disable-next-line react/prop-types
const ExpensiveComputationComponent = memo(({ compute, count }) => (
  <div>
    <h1>computed: {compute(count)}</h1>
    <h4>last re-render {new Date().toLocaleTimeString()}</h4>
  </div>
))

export default function Callback() {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(1)
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000)
    return () => clearTimeout(timer)
  })

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        count={count}
      />
    </div>
  )
}
