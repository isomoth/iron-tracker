// This component will have a function to calculate the total consumption of iron and vitamin C when the user clicks on the "Total consumption" button after tracking some foods.

import React, { useState, useEffect } from 'react';
import * as styles from '../TrackFood/TrackFood.styled';
/* import {
  handleSuggestion,
  calculateTotalIron,
  calculateTotalVitC
} from 'reducers/selectedFoods'; */

export const TotalValues = ({ isChanged }) => {
  // const foodName = useSelector((store) => store.food.food);
  // const vitamin_c = useSelector((store) => store.food.vitamin_c);
  // const iron = useSelector((store) => store.food.iron);
  const [selectedFoods, setSelectedFood] =useState(isChanged);
  const [showTotalValues, setShowTotalValues] = useState(false);
  useEffect(() => {
    //every time the value in isChanged is update from parent this useEffect will re render the component
    // saving prop in state as well to use later on for calculations 
    setSelectedFood(isChanged)
  }, [isChanged]);
  
  const totalIron = () => {
    const sumIron = selectedFoods
    .map((item) => item.iron)
    .reduce((prev, curr) => prev + curr, 0);
    // Round to two decimals
     return sumIron.toFixed(2);
	}
    
	const totalVitC = () => {
    const sumVitC = selectedFoods
    .map((item) => item.vitamin_c)
    .reduce((prev, curr) => prev + curr, 0);
    return sumVitC.toFixed(2);
	} 

  const onShowTotalValues = () => {
    setShowTotalValues(!showTotalValues);
  };

  return (
    <>
      {selectedFoods && selectedFoods.length !== 0 && (
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
    </>
  );
};
