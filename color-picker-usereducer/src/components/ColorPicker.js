import React, { useReducer } from 'react';

function colorReducer(state, action) {
  switch (action) {
    case 'red':
      return {
        color: (state.color = 'red'),
      };
    case 'yellow':
      return {
        color: (state.color = 'yellow'),
      };
    default:
      return state;
  }
}

export default function ColorPicker() {
  const initialState = {
    color: 'black',
  };

  const [state, dispatch] = useReducer(colorReducer, initialState);

  console.log(state.color);

  return (
    <div>
      <h1 style={{color:`${state.color}`}}>Pick a Color!</h1>
      <div className="button__area">
        <button onClick={() => dispatch('red')}>Red</button>
        <button onClick={() => dispatch('yellow')}>Yellow</button>
      </div>
    </div>
  );
}
