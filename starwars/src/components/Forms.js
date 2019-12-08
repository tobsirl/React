import React, { Component, Fragment } from 'react';
import './Forms.css';

export default class Forms extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFriendly: true,
    gender: ''
  };

  handleChange = event => {
    console.log(event.target);
    const { name, value, checked, type } = event.target;

    type === 'checked'
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  };

  render() {
    return (
      <Fragment>
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
        <label htmlFor="">
          First Name:
          <span>{this.state.firstName}</span>
        </label>
        <br />
        <label htmlFor="">
          Last Name:
          <span>{this.state.lastName}</span>
        </label>
        <br />
        <label htmlFor="">Friendly?</label>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
          name="isFriendly"
        />
        <span>{this.state.isFriendly === 'on' ? 'Checked' : 'UnChecked'}</span>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />{' '}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />{' '}
          Female
        </label>
      </Fragment>
    );
  }
}
