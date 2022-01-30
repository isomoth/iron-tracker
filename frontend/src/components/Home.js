import React from 'react';
import styled from 'styled-components';

// import { Footer } from './Footer';

export const Image = styled.img`
  width: 25%;
  height: auto;
  border-radius: 30%;
`;

export const Home = () => {
  return (
    <>
      <section className='main-container'>
        <h1>IRON TRACKER</h1>
        <Image src={require('../assets/chemistry.gif')} />
        <h2>Keeping your iron nutrition on track</h2>
        {/*  <p>1.62 billion people suffer from anemia (iron deficiency).</p>
        <p>Nutrition is a decisive factor in many cases.</p>
        <p>
          Track your daily iron intake with the help of a list of over 8000
          common foods.
        </p> */}
      </section>
      {/* <Footer /> */}
    </>
  );
};
