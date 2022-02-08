import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/constants';
import * as styles from './AddFood.styled';

// Tracker Functionality
export const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const [foodName, setFoodName] = useState('');
  const [vitamin_c, setVitamin_c] = useState(0);
  const [iron, setIron] = useState(0);
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showTotalValues, setShowTotalValues] = useState(false);

  const cleanFood = () => {
    setFoodName('');
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
    setFoodName(suggestion.food);
    setSelectedFood(suggestion);
    setSuggestions([]);
  };

  // Display suggestions when the user starts writing in the input field
  let matches = [];

  const onFood = (input) => {
    if (input.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(input, 'gi'); // Case insensitive
        // Check that there aren't any incomplete or empty objects in the database:
        // console.log(food);
        return food.food.match(regex);
      });
    }
    setSuggestions(matches);
    setFoodName(input);
    if (matches.length === 0) {
      /* setMessage('Food not found. Press "Add new food"'); */
      console.log('Add food: ', foodName);
    }
  };

  // Version 1: Form handler with pure React
  let handleAddFood = async (e) => {
    e.preventDefault();
    try {
      //   if (matches.length === 0) {
      let res = await fetch(API_URL('foods'), {
        method: 'POST',
        body: JSON.stringify({
          food: foodName,
          vitamin_c: vitamin_c,
          iron: iron
          //   food: 'blodpudding',
          //   vitamin_c: 0,
          //   iron: 20
        }),
        // Test if the payload is being sent
        // body: JSON.stringify({ title: 'React POST Request Example' }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // let resJson = await res.json();
      if (res.status === 201) {
        console.log(foodName);
        setFoodName('');
        setVitamin_c('');
        setIron('');
        setMessage('Food created successfully');
      } else {
        setMessage('Some error occurred');
      }
      //   }
    } catch (err) {
      console.log(err);
    }
  };

  // Version 2: Form handler with Redux

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
            cleanFood();
          }}
        >
          <styles.InputContainer>
            <input
              type='text'
              id='search'
              placeholder='Today I ate...'
              onChange={(e) => onFood(e.target.value)}
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
        <styles.TrackButton2 onClick={onShowForm}>
          Add new food
        </styles.TrackButton2>
        {showForm && (
          //   <form onSubmit={handleAddFood}>
          <form onSubmit={handleAddFood}>
            <input
              type='text'
              value={foodName}
              placeholder='food name'
              onChange={(e) => {
                console.log(e.target.value);
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
            <styles.TrackButton2
              type='submit'
              /*  onClick={() => {
                console.log(food);
                console.log(vitamin_c);
                console.log(iron);
              }} */
            >
              Save
            </styles.TrackButton2>
            <div className='message'>{message ? <p>{message}</p> : null}</div>
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
