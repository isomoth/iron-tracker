import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/constants';

// Styles
export const SuggestionContainer = styled.div`
  cursor: pointer;
  border: 1px solid #000;
  width: 50%;
  &:hover {
    background: gray;
  }
`;

export const InputField = styled.input`
  width: 50%;
`;

// Functionality
export const FoodTracker = () => {
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

  const onUserInput = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = foods.filter((food) => {
        const regex = new RegExp(`${text}`, 'gi');
        return food.food.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <>
      <h1>TODAY'S IRON INTAKE</h1>
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
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { foods } from 'reducers/foods';

// export const FoodTracker = ({ foods }) => {
//   const foodItems = useSelector((store) => store.foods.foodItems);
//   const dispatch = useDispatch();

//   const onToggleFood = (_id) => {
//     dispatch(foods.actions.toggleFood(_id));
//   };

//   const onDeleteFood = (_id) => {
//     dispatch(foods.actions.deleteFood(_id));
//   };

//   /* Empty list state */
//   if (foodItems.length === 0) {
//     return (
//       <section>
//         <p>Add a food item...</p>
//       </section>
//     );
//   } else {
//     return (
//       <section>
//         <h1>Today's foods</h1>
//         {foods.map((food) => (
//           <div className='food-container' key={food._id}>
//             <p>
//               <input
//                 className='checkbox'
//                 type='checkbox'
//                 checked={food.isComplete}
//                 onChange={() => onToggleFood(food._id)}
//               />
//             </p>
//             {/* Display the user's input as a food item on the list */}
//             <p>{food.text}</p>

//             <button
//               className='delete-button'
//               onClick={() => onDeleteFood(food._id)}
//             >
//               x
//             </button>
//           </div>
//         ))}
//       </section>
//     );
//   }
// };
