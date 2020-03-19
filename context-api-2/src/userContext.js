import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: 'Paul Tobin'
  };

  onChange = username => {
    this.setState({ username });
  };

  render() {
    return (
      <Provider
        value={{ username: this.state.username, onChange: this.onChange }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
