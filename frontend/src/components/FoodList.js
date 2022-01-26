import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/constants';
import styled from 'styled-components';

export const Header = styled.h1`
  color: #e73cb8;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
`;

export const Subheader = styled.h2`
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
`;

export const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods?iron=60'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <section>
      <Header>TOP IRON-RICH FOODS</Header>
      <Subheader>(mg per 100g serving)</Subheader>
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
