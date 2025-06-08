import * as React from "react";
import "./App.css";

export default function FollowTheLeader() {
  const position = [0, 0];

  const handleClick = ({ clientX, clientY }) => {};

  return (
    <div className="wrapper">
      <div
        className="box"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}
