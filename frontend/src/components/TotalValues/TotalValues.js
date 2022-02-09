// This component will have a function to calculate the total consumption of iron and vitamin C when the user clicks on the "Total consumption" button after tracking some foods.

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as styles from '../TrackFood/TrackFood.styled';
/* import {
  handleSuggestion,
  calculateTotalIron,
  calculateTotalVitC
} from 'reducers/selectedFoods'; */

export const TotalValues = ({ isChanged }) => {
  const foodName = useSelector((store) => store.food.food);
  const vitamin_c = useSelector((store) => store.food.vitamin_c);
  const iron = useSelector((store) => store.food.iron);
  //   const selectedFoods = useSelector((store) => ...store.selectedFoods);
  const [showTotalValues, setShowTotalValues] = useState(false);
  useEffect(() => {
    debugger;
    console.log(isChanged);
    console.log(
      '---here it is---' + JSON.stringify(localStorage.getItem('todaysFood'))
    );
  }, []);
  /* 
  const totalIron (event) => {
    event.preventDefault();
    dispatch(
      calculateTotalIron()
    );
	}
    
	const totalVitC (event) => {
    event.preventDefault();
    dispatch(
      calculateTotalVitC()
    );
	} */

  const onShowTotalValues = () => {
    setShowTotalValues(!showTotalValues);
  };

  return (
    <>
      {isChanged.length > 0 ? <div>Hello world</div> : ''}
      {/* {[].length !== 0 && (
        <styles.TrackButton2 onClick={onShowTotalValues}>
          Total consumption
        </styles.TrackButton2>
      )}
      {showTotalValues && (
        <div>
          <h3>My final score: </h3>
          {<p>Iron: {totalIron()} mg</p>
          <p>Vit. C: {totalVitC()} mg</p>}
        </div>
      )} */}
    </>
  );
};
