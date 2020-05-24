import React, { useReducer } from 'react';

function colorReducer(state, action) {
  switch (action.type) {
    case 'red':
      return {
        color: (state.color = 'red'),
      };
    case 'yellow':
      return {
        color: (state.color = 'yellow'),
      };
    case 'reset':
      return {
        color: (state.color = 'black'),
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

  return (
    <div>
      <h1 className="title" style={{ color: `${state.color}` }}>
        Pick a Color!
      </h1>
      <div className="button__area">
        <button
          className="btn btn-red"
          onClick={() => dispatch({ type: 'red' })}
        >
          Red
        </button>
        <button
          className="btn btn-yellow"
          onClick={() => dispatch({ type: 'yellow' })}
        >
          Yellow
        </button>
        <button
          className="btn btn-reset"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
