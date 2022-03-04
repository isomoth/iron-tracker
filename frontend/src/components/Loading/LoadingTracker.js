import React from 'react';
import * as styles from './LoadingTracker.styled';

const LoadingTracker = () => {
  return (
    <styles.LoadingOverlay>
      <h3>Loading...</h3>
      <styles.LoadingSpinner />
    </styles.LoadingOverlay>
  );
};

export default LoadingTracker;
