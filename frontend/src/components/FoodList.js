import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../utils/constants';

const FoodList = ({ food, iron, vitamin_c }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFoods(data.foods));
  };
  return (
    <section>
      <h1>TOP IRON-RICH FOODS</h1>
      {foods.map((food) => (
        <div>
          <Link to={`/foods/`}>
            <h3>Food: {foods.food}</h3>
            <p>Iron: {foods.iron}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default FoodList;
