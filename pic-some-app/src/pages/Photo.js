import React, { useContext } from 'react';
import { Context } from '../context/Context';

function Photos() {
  const { allPhotos } = useContext(Context);

  const photos = allPhotos.map(({id, url}) => {
    return <img key={id} src={url} alt="" />;
  });
  return (
    <main className="photos">
      <h1>Images go here</h1>
      <ul>{photos}</ul>
    </main>
  );
}

export default Photos;
