import * as React from "react";
import "./App.css";

export default function FollowTheLeader() {
  const [position, setPosition] = React.useState([0, 0]);
  const positionRef = React.useRef(position);

  const handleClick = ({ clientX, clientY }) => {
    const { width, height } = positionRef.current.getBoundingClientRect();

    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <div className="wrapper">
      <div
        className="box"
        ref={positionRef}
        onClick={handleClick}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}
