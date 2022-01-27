import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { displayFoods, onDeleteFood } from '../reducers/foods';

//Styles
export const EmptyStateContainer = styled.section`
  height: 50%;
`;

export const EmptyStateText = styled.p`
  color: #6610f2;
  text-shadow: 0 0 1px rgba(111, 66, 193, 0.3), 0 0 2px rgba(111, 66, 193, 0.3),
    0 0 5px rgba(111, 66, 193, 0.2);
  font-size: 2rem;
  text-align: center;
`;

// Food List Functionality
export const FoodList = () => {
  const foods = useSelector((store) => store.foods.foods);
  const loading = useSelector((store) => store.foods.loading);

  const dispatch = useDispatch();

  console.log('HERE IS MY DATA', foods);

  useEffect(() => {
    dispatch(displayFoods());
  }, [dispatch]);

  // Empty list state
  if (foods.length === 0) {
    return (
      <EmptyStateContainer>
        <EmptyStateText>No tracked foods for now...</EmptyStateText>
      </EmptyStateContainer>
    );
  } else {
    return (
      <>
        {!loading && (
          <section>
            {foods.map((food) => (
              <div key={food._id}>
                <p>{food.input}</p>
                <button onClick={() => dispatch(onDeleteFood(food._id))}>
                  x
                </button>
              </div>
            ))}
          </section>
        )}
      </>
    );
  }
};
