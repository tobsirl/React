import * as React from "react";

const initialState = {
  past: [],
  present: 0,
  future: [],
};

function reducer(state, action) {
  const { past, present, future } = state;

  return state;
}

export default function CounterWithUndoRedo() {
  const state = initialState;

  const handleIncrement = () => {};
  const handleDecrement = () => {};
  const handleUndo = () => {};
  const handleRedo = () => {};

  return (
    <div>
      <h1>Counter: {state.present}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
