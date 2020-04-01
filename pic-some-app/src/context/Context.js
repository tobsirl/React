import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`
      );
      const photos = await response.json();
      setAllPhotos(photos);
    })();
  }, []);

  const toggleFavorite = id => {
    const updatedArray = allPhotos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        };
      }
      return photo;
    });

    setAllPhotos(updatedArray);
  };

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
