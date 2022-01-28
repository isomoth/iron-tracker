import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.ul`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  align-items: center;
  list-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/foods'>Top Foods</Link>
      </li>
      <li>
        <Link to='/tracker'>Tracker</Link>
      </li>
      <li>
        <Link to='/disclaimer'>Disclaimer</Link>
      </li>
      {/*     <li>
        <a>GitHub</a>
      </li> */}
    </NavbarContainer>
  );
};
