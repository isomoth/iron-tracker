import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAddNewFood } from 'reducers/food';
import styled from 'styled-components';

export const AddFoodButton = styled.button`
  background: transparent;
  border: 0 solid transparent;
  border-color: #46d5da;
  box-shadow: 0 0 2px rgba(60, 169, 242, 0.9), 0 0 4px rgba(60, 102, 242, 0.4),
    0 0 1rem rgba(60, 242, 242, 0.3), 0 0 4rem rgba(60, 154, 242, 0.1);
  color: #46d5da;
  display: inline-flex;
  margin-top: 10%;
  &:hover {
    background: #46d5da;
    color: #fff;
  }
`;

const AddFoodForm = styled.form`
  margin-top: 10%;
`;

export const SaveButton = styled.button`
  background: #46d5da;
  display: inline-flex;
  margin-top: 10%;
  &:disabled {
    background: #2e5c7a;
  }
  &:hover {
    background: #2e5c7a;
    color: #fff;
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
      <AddFoodButton onClick={onShowForm}>Add new food</AddFoodButton>
      {showForm && (
        <AddFoodForm onSubmit={handleAddFood}>
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
          <SaveButton type='submit'>Save</SaveButton>
          <div className='message'>{message ? <p>{message}</p> : null}</div>
        </AddFoodForm>
      )}
    </>
  );
};
