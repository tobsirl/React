import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Autofocus input</h1>
      <label htmlFor="focus">Email Address</label>
      <input
        type="email"
        id="focus"
        name="focus"
        autoFocus
        placeholder="Enter your email"
      />
    </>
  );
}

export default App;
