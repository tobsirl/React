import React, { Component, Fragment } from 'react';
import './Forms.css';

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
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
            placeholder="Last Name"
          />
          <br />
          <label for="">
            First Name:
            <span>{this.state.firstName}</span>
          </label>
          <br />
          <label for="">
            Last Name:
            <span>{this.state.lastName}</span>
          </label>
        </div>
      </Fragment>
    );
  }
}
