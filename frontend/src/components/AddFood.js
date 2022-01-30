import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/constants';

// Styles
export const SuggestionContainer = styled.div`
  cursor: pointer;
  border: 2px solid gray;
  color: #fff;
  width: 80%;
  &:hover {
    background: #1ba2f6;
  }
  margin-left: auto;
  margin-right: auto;
  padding: 0.8rem 0.75rem;
`;

export const TrackerContainer = styled.section`
  display: block;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 20%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TrackButton = styled.button`
  margin-left: -17%;
  position: absolute;
  z-index: 2;
`;

export const FoodDataContainer = styled.div`
  background: #6f42c1;
  display: inline-flex;
  gap: 1%;
  justify-content: space-evenly;
  width: 80%;
`;

export const DisplayedFood = styled.p`
  border-style: solid;
  border-width: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 1%;
  justify-content: space-evenly;
  text-justify: center;
  border-color: #dee2e6;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
`;

export const DisplayedNutrition = styled.p`
  border-style: solid;
  border-width: 0;
  border-color: #dee2e6;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-justify: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
`;

// Tracker Functionality
export const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);

  const cleanInput = () => {
    setInput('');
  };

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const onSuggestionHandler = (suggestion) => {
    setInput(suggestion.food);
    setSelectedFood(suggestion);
    setSuggestions([]);
  };

  // Display suggestions when the user starts writing in the input field
  const onUserInput = (input) => {
    let matches = [];
    if (input.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(`${input}`, 'gi'); // Case insensitive
        return food.food.match(regex);
      });
    }
    setSuggestions(matches);
    setInput(input);
  };

  return (
    <>
      <TrackerContainer>
        <h1>TODAY'S IRON INTAKE</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSelectedFoods([...selectedFoods, selectedFood]);
            cleanInput();
          }}
        >
          <InputContainer>
            <input
              type='text'
              id='search'
              placeholder='What did you eat today?'
              onChange={(e) => onUserInput(e.target.value)}
              value={input}
            />
            <TrackButton>Track</TrackButton>
          </InputContainer>
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <SuggestionContainer
                key={i}
                onClick={() => onSuggestionHandler(suggestion)}
              >
                {suggestion.food}
              </SuggestionContainer>
            ))}
        </form>
        {/* Display the selected food with its nutritional values */}
        {selectedFoods.map((selectedFood, i) => (
          <FoodDataContainer key={i}>
            <DisplayedFood>{selectedFood.food}</DisplayedFood>
            <DisplayedNutrition>Iron: {selectedFood.iron}</DisplayedNutrition>
            <DisplayedNutrition>
              Vit. C: {selectedFood.vitamin_c}
            </DisplayedNutrition>
          </FoodDataContainer>
        ))}
      </TrackerContainer>
    </>
  );
};
