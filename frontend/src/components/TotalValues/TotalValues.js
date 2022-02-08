/* import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const TotalValues = () => {
  const foodName = useSelector((store) => store.food.food);
  const vitamin_c = useSelector((store) => store.food.vitamin_c);
  const iron = useSelector((store) => store.food.iron);
  const [showTotalValues, setShowTotalValues] = useState(false);

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
};

return (
  <>
    {selectedFoods.length !== 0 && (
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
 */
