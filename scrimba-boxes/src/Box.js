import React from 'react';

export default function Box({ on }) {
  const [state, setState] = React.useState(on);

  function handleClick() {
    setState((prevState) => !prevState);
  }

  const styles = {
    backgroundColor: state ? '#222222' : 'transparent',
  };

  return <div className="box" style={styles} onClick={handleClick}></div>;
}
