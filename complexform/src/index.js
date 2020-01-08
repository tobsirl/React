import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/*
  Instructions:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.
*/

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleReset = () => {};

  return (
    <React.Fragment>
      <div className="form-inputs">
        <label>
          Name:
          <input placeholder="name" type="text" ref={nameRef} />
        </label>
        <label>
          Email:
          <input placeholder="email" type="text" />
        </label>
        <label>
          Password:
          <input placeholder="password" type="text" />
        </label>
      </div>

      <hr />

      <button onClick={() => nameRef.current.focus()}>Focus Name Input</button>
      <button>Focus Email Input</button>
      <button>Focus Password Input</button>

      <hr />

      <button>Submit</button>
      <button>Reset</button>
    </React.Fragment>
  );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Form />, rootElement);
