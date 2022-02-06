import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
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
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
