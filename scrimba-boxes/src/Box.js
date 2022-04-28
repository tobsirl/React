import React from 'react';

export default function Box({ on, toggle }) {
  const styles = {
    backgroundColor: on ? '#222222' : 'transparent',
  };

  return <div className="box" style={styles} onClick={toggle}></div>;
}
