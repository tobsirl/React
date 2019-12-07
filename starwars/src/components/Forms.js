import React, { Component, Fragment } from 'react';

export default class Forms extends Component {
  state = {
    firstName: '',
    lastName: ''
  };

  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="firstname">
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              name="firstName"
              placeholder="First Name"
            />
          </label>
          <br />
          <label htmlFor="lastname">
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              name="lastName"
              placeholder="Last Name"
            />
          </label>
          <span>{this.state.firstName}</span>
          <br />
          <span>{this.state.lastName}</span>
        </div>
      </Fragment>
    );
  }
}
