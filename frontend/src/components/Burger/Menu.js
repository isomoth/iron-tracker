import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <Link to='/' open={open} onClick={() => setOpen(!open)}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/foods' open={open} onClick={() => setOpen(!open)}>
          Top Foods
        </Link>
      </li>
      <li>
        <Link to='/tracker' open={open} onClick={() => setOpen(!open)}>
          Tracker
        </Link>
      </li>
      <li>
        <Link to='/disclaimer' open={open} onClick={() => setOpen(!open)}>
          Disclaimer
        </Link>
      </li>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
