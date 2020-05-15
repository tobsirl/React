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

  const { strMeal, strInstructions, strMealThumb } = data.meals[0];

  return (
    <>
      <div className="container">
        <p>{data.meals.idMeal}</p>
        <h1>{strMeal}</h1>
        <img className="image" src={strMealThumb} alt="" />
        <p>{strInstructions}</p>
      </div>
    </>
  );
}
