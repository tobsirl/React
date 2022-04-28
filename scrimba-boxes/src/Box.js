import React from 'react';

export default function Box({ id, on, toggle }) {
  const styles = {
    backgroundColor: on ? '#222222' : 'transparent',
  };

  return <div className="box" style={styles} onClick={() => toggle(id)}></div>;
}
