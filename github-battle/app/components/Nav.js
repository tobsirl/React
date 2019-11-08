import React from 'react';
import { ThemeConsumer } from '../contexts/theme';

export default function Nav() {
  return (
    <ThemeConsumer>
      <div>
        <h1>Nav bar</h1>
      </div>
    </ThemeConsumer>
  );
}
