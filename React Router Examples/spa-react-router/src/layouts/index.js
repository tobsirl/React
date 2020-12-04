import React from 'react';

export function Layout(props) {
  return (
    <div className="bg-purple-500 border border-black m-5">
      {props.children}
    </div>
  );
}
