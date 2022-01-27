import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/constants';
import { useDispatch } from 'react-redux';
import { onAddFood } from '../reducers/foods';

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
  margin-top: 15%;
  margin-bottom: 10%;
`;

// Tracker Functionality
export const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const cleanInput = () => {
    setInput('');
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch(onAddFood(input));
      setInput('');
    }
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
        <form onSubmit={onAddFood}>
          <input
            type='text'
            id='search'
            placeholder='What did you eat today?'
            onKeyDown={onEnter}
            onChange={(e) => onUserInput(e.target.value)}
            value={input}
            /* onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }} */ // List of suggestions disappears when clicking outside of it
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
          <button
            onClick={(e) => {
              onAddFood(e);
              cleanInput();
            }}
          >
            Track
          </button>
        </form>
      </TrackerContainer>
    </>
  );
};
