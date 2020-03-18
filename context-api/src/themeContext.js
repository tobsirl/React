import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  render() {
    return <Provider value={'dark'}>{this.props.children}</Provider>;
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
