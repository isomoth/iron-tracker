import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { onDeleteFood } from '../reducers/foods';
import { useSafeDispatch } from 'hooks/useSafeDispatch';

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

  //   const dispatch = useDispatch();
  const unsafeDispatch = useDispatch();
  const dispatch = useSafeDispatch(unsafeDispatch);

  return (
    <section>
      {foods.map((food) => (
        <div key={food._id}>
          <p>{food.input}</p>
          <button onClick={() => dispatch(onDeleteFood(food._id))}>x</button>
        </div>
      ))}
    </section>
  );
};
// };
