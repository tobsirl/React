import React, { useState } from 'react';

import memesdata from '../memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');

  function getMemeImage() {
    const meme =
      memesdata.data.memes[
        Math.floor(Math.random() * memesdata.data.memes.length)
      ];
    return setMemeImage(meme.url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
