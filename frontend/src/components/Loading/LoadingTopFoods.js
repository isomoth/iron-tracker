import React from 'react';
import * as styles from './LoadingTopFoods.styled';

const LoadingTopFoods = () => {
  return (
    <>
      <styles.LoadingOverlay>
        <h3>Loading...</h3>
        <styles.LoadingSpinner />
      </styles.LoadingOverlay>
    </>
  );
};

export default LoadingTopFoods;
