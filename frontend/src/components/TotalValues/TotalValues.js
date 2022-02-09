import React, { useState, useEffect } from 'react';
import * as styles from '../TrackFood/TrackFood.styled';

export const TotalValues = ({ isChanged }) => {
  const [selectedFoods, setSelectedFood] = useState(isChanged);
  const [showTotalValues, setShowTotalValues] = useState(false);
  useEffect(() => {
    // Every time the value in isChanged is updated from TrackFood (the parent component), this useEffect will re-render the component.
    // Then it will save the prop in the state and use it for calculations later on.
    setSelectedFood(isChanged);
  }, [isChanged]);

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
