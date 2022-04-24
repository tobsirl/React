import React, { useState } from 'react';

import memesdata from '../memesData';

export default function Meme() {
  const [meme, setMeme] = useState({

  });

  function getMemeImage() {
    const meme =
      memesdata.data.memes[
        Math.floor(Math.random() * memesdata.data.memes.length)
      ];
    return setMeme(meme.url);
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
      <img src={meme} className="meme--image" />
    </main>
  );
}
