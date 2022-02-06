/* import React, { createContext, useState, useEffect } from 'react';

export const FoodsContext = createContext({
  foods: []
});

export const FoodContextProvider = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <FoodsContext.Provider
      value={{
        foods
      }}
    >
      {foods.map((food) => (
        <div key={food._id}>
          <h4>{food.food}</h4>
          <p>Iron: {food.iron}</p>
          <p>Vitamin C: {food.vitamin_c}</p>
        </div>
      ))}
    </FoodsContext.Provider>
  );
};
 */
