import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time === null) return null;
  return (
    <>
      <section>
        <h1>Current Time</h1>
        <p>{time.toLocaleTimeString()}</p>
      </section>
    </>
  );
}

export default App;
