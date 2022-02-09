import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAddNewFood } from 'reducers/food';
import styled from 'styled-components';

export const TrackButton2 = styled.button`
  display: inline-flex;
  &:disabled {
    background: #073322;
  }
`;

export const AddNewFood = () => {
  const [foodName, setFoodName] = useState('');
  const [vitamin_c, setVitamin_c] = useState(0);
  const [iron, setIron] = useState(0);
  const [message, setMessage] = useState('');
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
    setMessage('Food created successfully');
    /* else {
      setMessage('Some error occurred');
    } */
  };

  return (
    <>
      <TrackButton2 onClick={onShowForm}>Add new food</TrackButton2>
      {showForm && (
        <form onSubmit={handleAddFood}>
          <input
            type='text'
            value={foodName}
            placeholder='food name'
            onChange={(e) => {
              setFoodName(e.target.value);
            }}
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
          <TrackButton2 type='submit'>Save</TrackButton2>
          <div className='message'>{message ? <p>{message}</p> : null}</div>
        </form>
      )}
    </>
  );
};
