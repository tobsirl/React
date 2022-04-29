import React, { useState } from 'react';

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  function toggleShown() {
    setIsShown((prevState) => !prevState);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>Show Punchline</button>
      <hr />
    </div>
  );
}
