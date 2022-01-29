import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/constants';

// Styles
export const SuggestionContainer = styled.div`
  cursor: pointer;
  border: 2px solid gray;
  color: #fff;
  width: 50%;
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

export const DisplayedFood = styled.p`
  width: 80%;
  background: #6f42c1;
  border-color: #6f42c1;
  border-radius: 0.15rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 0.75rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

// Tracker Functionality
export const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const cleanInput = () => {
    setInput('');
  };

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const onSuggestionHandler = (input) => {
    setInput(input);
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
            setSelectedFoods([...selectedFoods, input]);
            cleanInput();
          }}
        >
          <input
            type='text'
            id='search'
            placeholder='What did you eat today?'
            onChange={(e) => onUserInput(e.target.value)}
            value={input}
            /* onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }} */ // Make the list of suggestions disappear when clicking outside of it
          />
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <SuggestionContainer
                key={i}
                onClick={() => onSuggestionHandler(suggestion.food)}
              >
                {suggestion.food}
              </SuggestionContainer>
            ))}
        </form>
        {/* Display a <p> containing the selected food  */}
        <div>
          {selectedFoods.map((selectedFood) => (
            <DisplayedFood>{selectedFood}</DisplayedFood>
          ))}
        </div>
        <button
          onClick={(event) => {
            event.preventDefault();
            setSelectedFoods([...selectedFoods, input]);
            cleanInput();
          }}
        >
          Track
        </button>
      </TrackerContainer>
    </>
  );
};
