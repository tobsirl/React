import React, { useReducer } from 'react'

// eslint-disable-next-line no-nested-ternary
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)

const step = 50

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_R':
      return { ...state, r: limitRGB(state.r + step) }
    case 'DECREMENT_R':
      return { ...state, r: limitRGB(state.r - step) }
    case 'INCREMENT_G':
      return { ...state, g: limitRGB(state.g + step) }
    case 'DECREMENT_G':
      return { ...state, g: limitRGB(state.g - step) }
    case 'INCREMENT_B':
      return { ...state, b: limitRGB(state.b + step) }
    case 'DECREMENT_B':
      return { ...state, b: limitRGB(state.b - step) }
    default:
      return state
  }
}
export default function Reducer() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 })

  return (
    <div>
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>useReducer Example</h1>
      <div>
        <span>r</span>
        <button type="button" onClick={() => dispatch({ type: 'INCREMENT_R' })}>
          ➕
        </button>
        <button type="button" onClick={() => dispatch({ type: 'DECREMENT_R' })}>
          ➖
        </button>
      </div>
      <div>
        <span>g</span>
        <button type="button" onClick={() => dispatch({ type: 'INCREMENT_G' })}>
          ➕
        </button>
        <button type="button" onClick={() => dispatch({ type: 'DECREMENT_G' })}>
          ➖
        </button>
      </div>
      <div>
        <span>b</span>
        <button type="button" onClick={() => dispatch({ type: 'INCREMENT_B' })}>
          ➕
        </button>
        <button type="button" onClick={() => dispatch({ type: 'DECREMENT_B' })}>
          ➖
        </button>
      </div>
    </div>
  )
}
