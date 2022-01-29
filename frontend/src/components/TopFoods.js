import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { displayFoods, foods } from 'reducers/foods';

export const TopFoods = () => {
  //   const foods = useSelector((store) => store.foods.foods);
  //   const dispatch = useDispatch;

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods?iron=60'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <section className='main-container'>
      <h1>IRON-RICH FOODS</h1>
      <h2>HALL OF FAME</h2>
      <h3>(mg per 100g serving)</h3>
      {/* <button
        onClick={() => {
          dispatch(displayFoods());
        }}
      >
        Show me the winners
      </button> */}
      {foods.map((food) => (
        <div key={food._id}>
          <h4>{food.food}</h4>
          <p>Iron: {food.iron}</p>
          <p>Vitamin C: {food.vitamin_c}</p>
        </div>
      ))}
    </section>
  );
};
