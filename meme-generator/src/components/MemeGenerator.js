import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes').then(res =>
      res.json().then(data => this.setState({ allMemeImgs: data.data }))
    );
  }

  render() {
    return (
      <div>
        <h1>Meme Generator</h1>
      </div>
    );
  }
}

export default MemeGenerator;
