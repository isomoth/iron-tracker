import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  width: 25%;
  height: auto;
  border-radius: 30%;
  @media (min-width: 768px) {
    width: 15%;
  }
`;

export const Home = () => {
  return (
    <>
      <section className='main-container'>
        <h1>IRON TRACKER</h1>
        <Image src={require('../assets/chemistry.gif')} />
        <h2>Keeping your iron nutrition on track</h2>
      </section>
    </>
  );
};
