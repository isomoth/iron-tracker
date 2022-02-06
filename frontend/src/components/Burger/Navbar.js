import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    text-shadow: 0 0 1px rgba(50, 251, 226, 0.6),
      0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3),
      0 0 2rem rgba(50, 251, 226, 0.2);
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Navbar = ({ open }) => {
  return (
    <StyledMenu open={open}>
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
    </StyledMenu>
  );
};
Navbar.propTypes = {
  open: bool.isRequired
};

export default Navbar;
