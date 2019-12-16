import React from 'react';

export function withToggle(Component) {
  return class withToggle extends Component {
    state = {
      on: false
    };

    toggle = () => {
      this.setState(prevState => {
        return {
          on: !prevState.on
        };
      });
    };

    render() {
      return (
        <Component on={this.state.on} toggle={this.toggle} {...this.props} />
      );
    }
  };
}
