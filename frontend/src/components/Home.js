import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  width: 15%;
  height: auto;
  border-radius: 30%;
`;

export const Header = styled.h1`
  color: #e73cb8;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
`;

export const Subheader = styled.h2`
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
`;

export const Home = () => {
  return (
    <div>
      <Image src={require('../assets/chemistry.gif')} />
      <Header>IRON TRACKER</Header>
      <Subheader>Keeping your iron nutrition on track</Subheader>
      <p>1.62 billion people suffer from anemia (iron deficiency).</p>
      <p>Nutrition is a decisive factor in many cases.</p>
      <p>
        Track your daily iron intake with the help of a food list of over 8000
        common foods.
      </p>
    </div>
  );
};
