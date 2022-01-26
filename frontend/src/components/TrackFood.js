// import React, { useEffect, useState } from 'react';
// /* import styled from 'styled-components'; */
// import { API_URL } from 'utils/constants';
// import { useSelector, useDispatch } from 'react-redux';
// import { foods } from 'reducers/foods';
// import { FoodInput } from './FoodInput';
// // import { Link } from 'react-router-dom';

// export const TrackFood = () => {
//   const [input, setInput] = useState('');
//   const foods = useSelector((store) => store.foods);
//   const dispatch = useDispatch();

//   const getFoods = () => {
//     return (dispatch, getState) => {
//       dispatch(foods.actions.setLoading(true));
//       fetch(API_URL('foods'), {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ food: getState().foods.food })
//       })
//         .then((res) => res.json())
//         .then((data) => dispatch(foods.actions.setFoods(data)))
//         .finally(() => dispatch(foods.actions.setLoading(false)));
//     };
//   };

//   const onAddFood = (e) => {
//     if (input.trim() !== '') {
//       dispatch(foods.actions.addFood(input));
//       setInput('');
//     }
//     e.preventDefault();
//   };

//   const onToggleFood = (_id) => {
//     dispatch(foods.actions.toggleFood(_id));
//   };

//   const onDeleteFood = (_id) => {
//     dispatch(foods.actions.deleteFood(_id));
//   };

//   /* Empty list state */
//   if (foods.length === 0) {
//     return (
//       <section>
//         <p>Add a food item...</p>
//       </section>
//     );
//   } else {
//     return (
//       <>
//         <FoodInput />
//         <section>
//           {foods.map((food) => (
//             <div className='food-container' key={food._id}>
//               <p>
//                 <input
//                   className='checkbox'
//                   type='checkbox'
//                   checked={food.isComplete}
//                   onChange={() => onToggleFood(food._id)}
//                 />
//               </p>
//               {/* Display the user's input as a food item on the list */}
//               <p>{food.text}</p>

//               <button
//                 className='delete-button'
//                 onClick={() => onDeleteFood(food._id)}
//               >
//                 x
//               </button>
//             </div>
//           ))}
//         </section>
//       </>
//     );
//   }
// };
