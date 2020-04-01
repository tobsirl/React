import React, { useContext } from 'react';
import Image from '../components/Image';
import { Context } from '../context/Context';
import { getClass } from '../utils';

function Photos() {
  const { allPhotos } = useContext(Context);

  const photos = allPhotos.map((img, index) => {
    return <Image img={img} key={img.id} className={getClass(index)} />;
  });
  
  return <main className="photos">{photos}</main>;
}

export default Photos;
