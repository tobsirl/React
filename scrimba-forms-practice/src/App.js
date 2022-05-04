import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    okayToEmail: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const passwordCheck = formData.password === formData.passwordConfirm;

    const check = passwordCheck
      ? 'Successfully signed up'
      : 'passwords to not match';

    console.log(check);

    const checkSignup = formData.okayToEmail
      ? 'Thanks for signing up for our newsletter!'
      : '';

    console.log(checkSignup);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            name="okayToEmail"
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
