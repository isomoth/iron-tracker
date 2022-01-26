import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/constants';

// Styles

export const Header = styled.h1`
  color: #e73cb8;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
`;

export const SuggestionContainer = styled.div`
  cursor: pointer;
  border: 1px solid #000;
  color: #fff;
  width: 50%;
  &:hover {
    background: #1ba2f6;
  }
`;

export const InputField = styled.input`
  width: 50%;
  background: #30115e;
  border: 0 solid #ced4da;
  color: #fff;
`;

// Tracker Functionality
export const FoodInput = () => {
  const [foods, setFoods] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(API_URL('foods'))
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  // Display suggestions when the user starts writing in the input field
  const onUserInput = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(`${text}`, 'gi'); // Case insensitive
        return food.food.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <>
      <Header>TODAY'S IRON INTAKE</Header>
      <div>
        <InputField
          type='text'
          id='search'
          placeholder='What did you eat today?'
          onChange={(e) => onUserInput(e.target.value)}
          value={text}
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
      </div>
    </>
  );
};
