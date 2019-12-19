import React from 'react';
import Favorite from './Favorite';
import Menu from './Menu';
import Toggler from './Toggler';

import './App.css';

function App() {
  return (
    <div className="App">
      <Toggler>{(on, toggle) => <Favorite on={on} toggle={toggle} />}</Toggler>
      <hr />
      <Toggler>{(on, toggle) => <Menu on={on} toggle={toggle} />}</Toggler>
    </div>
  );
}

export default App;
