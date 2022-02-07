import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/constants';
import { useDispatch } from 'react-redux';
// import { onAddFood } from '../../reducers/foods';
import { onAddNewFood } from '../../reducers/food';
import * as styles from './AddFood.styled';

// Tracker Functionality
export const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showTotalValues, setShowTotalValues] = useState(false);

  const dispatch = useDispatch();
  const cleanInput = () => {
    setInput('');
  };

  // Display a form for adding a new food
  const onShowForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const suggestionHandler = (suggestion) => {
    setInput(suggestion.food);
    setSelectedFood(suggestion);
    setSuggestions([]);
  };

  // Display suggestions when the user starts writing in the input field
  let matches = [];

  const onUserInput = (input) => {
    if (input.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(input, 'gi'); // Case insensitive
        return food.food.match(regex);
        // Check that there aren't any incomplete or empty objects in the database:
        // console.log(food);
      });
    }
    setSuggestions(matches);
    setInput(input);
    if (matches.length === 0) {
      console.log('Add food');
    }
  };

  const addFood = () => {
    if (matches.length === 0) {
      dispatch(onAddNewFood(input));
      console.log('Your food was added!');
    }
    setInput('');
  };

  const deleteSelectedFoodHandler = (_id) => {
    const removeFood = selectedFoods.filter((selectedFood) => {
      return selectedFood._id !== _id;
    });
    setSelectedFoods(removeFood);
  };

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
            cleanInput();
          }}
        >
          <styles.InputContainer>
            <input
              type='text'
              id='search'
              placeholder='Today I ate...'
              onChange={(e) => onUserInput(e.target.value)}
              value={input}
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
        <styles.TrackButton2 onClick={onShowForm}>
          Add new food
        </styles.TrackButton2>
        {showForm && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              cleanInput();
            }}
          >
            <input type='text' placeholder='Food name' />
            <input type='text' placeholder='Iron (mg)' />
            <input type='text' placeholder='Vitamin C (mg)' />
            <styles.TrackButton2 onClick={addFood}>Save</styles.TrackButton2>
          </form>
        )}
        {/* Calculate total nutrient values */}
        {selectedFoods.length !== 0 && (
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
        )}
      </section>
    </>
  );
};
