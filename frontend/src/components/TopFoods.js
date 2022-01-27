import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/constants';

export const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods?iron=60'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <section className='main-container'>
      <h1>TOP IRON-RICH FOODS</h1>
      <h2>(mg per 100g serving)</h2>
      {foods.map((food) => (
        <div key={food._id}>
          <h3>{food.food}</h3>
          <p>Iron: {food.iron}</p>
          <p>Vitamin C: {food.vitamin_c}</p>
        </div>
      ))}
    </section>
  );
};
