import {useState} from 'react'

export default function StateComponent() {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div>
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      useState Example
    </h1>
    </div>
  );
}
