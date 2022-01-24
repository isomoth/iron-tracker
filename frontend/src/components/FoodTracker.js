import React from 'react';

export const FoodTracker = () => {
  return <h1>TODAY'S FOODS</h1>;
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
