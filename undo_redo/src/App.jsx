import * as React from "react";

const initialState = {
  past: [],
  present: 0,
  future: [],
};

function reducer(state, action) {
  const { past, present, future } = state;
  switch (action.type) {
    case "increment":
      return {
        past: [...past, present],
        present: present + 1,
        future: [],
      };
    case "decrement":
      return {
        past: [...past, present],
        present: present - 1,
        future: [],
      };
    case "undo": {
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      return {
        past: past.slice(0, -1),
        present: previous,
        future: [present, ...future],
      };
    }
    case "redo": {
      if (future.length === 0) return state;
      const next = future[0];
      return {
        past: [...past, present],
        present: next,
        future: future.slice(1),
      };
    }
    default:
      return state;
  }
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
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
