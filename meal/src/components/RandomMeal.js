import React, { useState, useEffect } from 'react';

export default function RandomMeal() {
  const [data, setData] = useState(null);

  async function getMeal() {
    const mealURL = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const response = await fetch(mealURL);
    const randomMeal = await response.json();

    setData(randomMeal);
  }

  useEffect(() => {
    getMeal();
  }, []);

  if (!data) return null;
  console.log(data.meals[0].idMeal);

  const {
    strMeal,
    strInstructions,
    strMealThumb,
    strCategory,
    strArea,
  } = data.meals[0];

  return (
    <>
      <div className="container">
        <div class="card">
          <div class="img">
            <img className="card__image" src={strMealThumb} alt="" />
          </div>
          <div class="card__info">
            <h1 className="card__title">{strMeal}</h1>
            <p>{strArea}</p>
            <p>{strCategory}</p>
            <p>{strInstructions.slice(0, 30) + '...'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
