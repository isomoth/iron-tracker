import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAddNewFood } from 'reducers/food';
import * as styles from './AddNewFood.styled';

export const AddNewFood = () => {
  const [foodName, setFoodName] = useState('');
  const [vitamin_c, setVitamin_c] = useState(0);
  const [iron, setIron] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  // Display a form for adding a new food
  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const handleAddFood = (event) => {
    event.preventDefault();
    dispatch(
      onAddNewFood({ food: foodName, vitamin_c: vitamin_c, iron: iron })
    );
    setFoodName('');
    setVitamin_c('');
    setIron('');
    alert('Food created successfully');
  };

  return (
    <>
      <styles.AddFoodButton onClick={onShowForm}>Add</styles.AddFoodButton>
      {showForm && (
        <styles.AddFoodForm onSubmit={handleAddFood}>
          <input
            type='text'
            value={foodName}
            placeholder='food name'
            onChange={(e) => setFoodName(e.target.value)}
          />
          <input
            type='text'
            value={vitamin_c}
            placeholder='vit.c (mg)'
            onChange={(e) => setVitamin_c(e.target.value)}
          />
          <input
            type='text'
            value={iron}
            placeholder='iron'
            onChange={(e) => setIron(e.target.value)}
          />
          <styles.SaveButton type='submit'>Save</styles.SaveButton>
        </styles.AddFoodForm>
      )}
    </>
  );
};
