import { useState, useEffect, useCallback, memo } from 'react'

const ExpensiveComputationComponent = memo(({ compute, count }) => (
  <div>
    <h1>computed: {compute(count)}</h1>
    <h4>last re-render {new Date().toLocaleTimeString()}</h4>
  </div>
))

export default function Callback() {
  return (
    <div>
      <h1>useCallback</h1>
    </div>
  )
}
