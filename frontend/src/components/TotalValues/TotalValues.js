import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const TotalValuesButton = styled.button`
  background: #00c9a5;
  margin: 5%;
  &:disabled {
    background: #2e7a5d;
  }
  &:hover {
    background: #6b40ad;
  }
`;

export const TotalValues = ({ isChanged }) => {
  const [selectedFoods, setSelectedFood] = useState(isChanged);
  const [showTotalValues, setShowTotalValues] = useState(false);
  useEffect(() => {
    // When isChanged is updated in TrackFood (the parent component), useEffect re-renders the component.
    // Then it saves the prop in the state, using it for calculations later on.
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
    alert(
      'YOUR FINAL SCORE: Iron: ' +
        totalIron() +
        'mg, Vit. C: ' +
        totalVitC() +
        'mg'
    );
  };

  return (
    <>
      {selectedFoods && selectedFoods.length !== 0 && (
        <TotalValuesButton onClick={onShowTotalValues}>Total</TotalValuesButton>
      )}
    </>
  );
};
