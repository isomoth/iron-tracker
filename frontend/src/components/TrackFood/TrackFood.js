import React, { useEffect, useState } from 'react';
import { AddNewFood } from 'components/AddNewFood/AddNewFood';
import { API_URL } from 'utils/constants';
import * as styles from './TrackFood.styled';
import { TotalValues } from '../TotalValues/TotalValues';

export const TrackFood = () => {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [showTotalValues, setShowTotalValues] = useState(false);

  const cleanFood = () => {
    setFoodName('');
  };

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const suggestionHandler = (suggestion) => {
    setFoodName(suggestion.food);
    setSelectedFood(suggestion);
    setSuggestions([]);
  };

  // Display suggestions when the user starts writing in the input field
  let matches = [];

  const onFoodSelect = (input) => {
    if (input.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(input, 'gi'); // Case insensitive
        return food.food.match(regex);
      });
    }
    setSuggestions(matches);
    setFoodName(input);
    if (matches.length === 0) {
      setMessage('Food not found. Press "Add new food"');
    }
  };

  const deleteSelectedFoodHandler = (_id) => {
    const removeFood = selectedFoods.filter((selectedFood) => {
      return selectedFood._id !== _id;
    });
    setSelectedFoods(removeFood);
  };

  // This part will be moved to the TotalValues component.
  const totalIron = () => {
    const sumIron = selectedFoods
      .map((item) => item.iron)
      .reduce((prev, curr) => prev + curr, 0);
    // Round to two decimals
    return sumIron.toFixed(2);
  };

  const totalVitC = () => {
    const sumVitC = selectedFoods
      .map((item) => item.vitamin_c)
      .reduce((prev, curr) => prev + curr, 0);
    return sumVitC.toFixed(2);
  };

  const onShowTotalValues = () => {
    setShowTotalValues(!showTotalValues);
  };

  return (
    <>
      <section className='main-container'>
        <h1>TODAY'S IRON INTAKE</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSelectedFoods([...selectedFoods, selectedFood]);
            localStorage.setItem('todaysFood', [
              ...selectedFoods,
              selectedFood
            ]);
            cleanFood();
          }}
        >
          <styles.InputContainer>
            <input
              type='text'
              id='search'
              placeholder='Today I ate...'
              onChange={(e) => onFoodSelect(e.target.value)}
              value={foodName}
              disabled={foods.length === 0}
            />
            <styles.TrackButton disabled={foods.length === 0}>
              Track
            </styles.TrackButton>
          </styles.InputContainer>
          {suggestions &&
            suggestions.map((suggestion, _id) => (
              <styles.SuggestionContainer
                key={suggestion._id}
                onClick={() => suggestionHandler(suggestion)}
              >
                {suggestion.food}
              </styles.SuggestionContainer>
            ))}
        </form>
        {/* Display the selected food with its nutritional values */}
        {selectedFoods.map((selectedFood, _id) => (
          <styles.FoodDataContainer key={selectedFood._id}>
            <styles.DisplayedFood>{selectedFood.food}</styles.DisplayedFood>
            <styles.DisplayedNutrition>
              Iron: {selectedFood.iron}
            </styles.DisplayedNutrition>
            <styles.DisplayedNutrition>
              Vit. C: {selectedFood.vitamin_c}
            </styles.DisplayedNutrition>
            <styles.DisplayedNutrition>
              <button
                onClick={() => deleteSelectedFoodHandler(selectedFood._id)}
              >
                x
              </button>
            </styles.DisplayedNutrition>
          </styles.FoodDataContainer>
        ))}
        {selectedFoods.length !== 0 && (
          <styles.TrackButton2
            onClick={() => {
              if (selectedFoods.length !== 0) {
                setSelectedFoods([]);
              }
            }}
            disabled={selectedFoods.length === 0}
          >
            Reset
          </styles.TrackButton2>
        )}
        {matches.length === 0 && <AddNewFood />}
        <div className='message'>{message ? <p>{message}</p> : null}</div>
        {/* This part will be moved to the TotalValues component.  */}
        {/* Calculate total nutrient values */}
        {/*  {selectedFoods.length !== 0 && (
          <styles.TrackButton2 onClick={onShowTotalValues}>
            Total consumption
          </styles.TrackButton2>
        )}
        {showTotalValues && (
          <div>
            <h3>My final score: </h3>
            <p>Iron: {totalIron()} mg</p>
            <p>Vit. C: {totalVitC()} mg</p>
          </div>
        )} */}
        <TotalValues isChanged={selectedFoods.length} />
        {selectedFoods.length > 0 && <TotalValues isChanged={selectedFoods} />}
      </section>{' '}
    </>
  );
};
