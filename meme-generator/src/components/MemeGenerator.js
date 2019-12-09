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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * 100);
    console.log(random);
    this.setState({
      randomImage: this.state.allMemeImgs[random].url
    });
  }

  render() {
    console.log(this.state.randomImage);
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="Bottom Text"
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="Random Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
