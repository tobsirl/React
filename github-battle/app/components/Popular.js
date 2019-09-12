import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return <ul className="flex-center">
      {languages.map((language, index) => {
        return <li key={index}>{language}</li>
      })}
    </ul>;
  }
}
