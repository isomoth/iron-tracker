import React, { useEffect, useState } from 'react';
import * as styles from './TrackFood.styled';
import { API_URL } from 'utils/constants';

import { AddNewFood } from 'components/AddNewFood/AddNewFood';
import { TotalValues } from '../TotalValues/TotalValues';
import Loading from 'components/Loading/LoadingTracker';

export const TrackFood = () => {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [loading, setLoading] = useState(false);

  const cleanFood = () => {
    setFoodName('');
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .finally(() => setLoading(false));
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
      setMessage('Food not found. Press "Add"');
    }
  };

  const deleteSelectedFoodHandler = (_id) => {
    const removeFood = selectedFoods.filter((selectedFood) => {
      return selectedFood._id !== _id;
    });
    setSelectedFoods(removeFood);
  };

  return (
    <>
      <section className='main-container'>
        <h1>IRON INTAKE</h1>
        {loading && <Loading />}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSelectedFoods([...selectedFoods, selectedFood]);
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
          <styles.SuggestionsContainer>
            {suggestions &&
              suggestions.map((suggestion, _id) => (
                <styles.SuggestionContainer
                  key={suggestion._id}
                  onClick={() => suggestionHandler(suggestion)}
                >
                  {suggestion.food}
                </styles.SuggestionContainer>
              ))}
          </styles.SuggestionsContainer>
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
              <styles.DeleteButton
                onClick={() => deleteSelectedFoodHandler(selectedFood._id)}
              >
                x
              </styles.DeleteButton>
            </styles.DisplayedNutrition>
          </styles.FoodDataContainer>
        ))}
        <styles.ResetButton
          onClick={() => {
            if (selectedFoods.length !== 0) {
              setSelectedFoods([]);
            }
          }}
          disabled={selectedFoods.length === 0}
        >
          Reset
        </styles.ResetButton>
        {matches.length === 0 && <AddNewFood />}
        <div className='message'>{message ? <p>{message}</p> : null}</div>
        {/* TrackFood is a parent component to TotalValues (child). selectedFoods acts as a parent state, passed to TotalValues as a prop. */}
        {/* In the child component, the useEffect hook will listen to this prop every time it changes from the parent:  */}
        <TotalValues isChanged={selectedFoods} />
      </section>
    </>
  );
};
