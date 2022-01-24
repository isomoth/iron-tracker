import React from 'react';

export const FoodList = ({ foods }) => {
  return (
    <section>
      <h1>TOP IRON-RICH FOODS</h1>
      {foods.map((food) => (
        <div key={food._id}>
          <div>
            <h3>Food: {food.food}</h3>
            <p>Iron: {food.iron}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
