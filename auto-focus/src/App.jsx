import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <h1>Autofocus input</h1>
      <label htmlFor="focus">Email Address</label>
      <input
        type="email"
        id="focus"
        name="focus"
        ref={inputRef}
        autoFocus
        placeholder="Enter your email"
      />
    </>
  );
}

export default App;
