import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/constants';

export const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data.food));
  });

  return (
    <section>
      <h1>TOP IRON-RICH FOODS</h1>
      {foods.map((food) => (
        <div key={foods._id}>
          <div>
            <h3>Food: {foods.food}</h3>
            <p>Iron: {foods.iron}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
