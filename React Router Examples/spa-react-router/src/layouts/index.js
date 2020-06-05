import React from 'react';

export function Layout(props) {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
