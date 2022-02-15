import React from 'react';
import * as styles from './Loading.styled';

const Loading = () => {
  return (
    <>
      <styles.LoadingOverlay>
        <h3>Loading...</h3>
        <styles.LoadingSpinner />
      </styles.LoadingOverlay>
    </>
  );
};

export default Loading;
