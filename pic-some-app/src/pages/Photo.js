import React, { useContext } from 'react';
import Image from '../components/Image';
import { Context } from '../context/Context';
import { getClass } from '../utils';

function Photos() {
  const { allPhotos } = useContext(Context);

  const photos = allPhotos.map(({ id, url, index }) => {
    return <Image img={url} key={id} className={getClass(index)} />;
  });
  return (
    <main className="photos">
      <h1>Images go here</h1>
      <ul>{photos}</ul>
    </main>
  );
}

export default Photos;
