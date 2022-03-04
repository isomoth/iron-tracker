import React from 'react';
import { useState, useRef } from 'react';

import Burger from './Burger/Burger';
import Menu from './Burger/Menu';
import useOnClickOutside from 'hooks/useOnClickOutside';

export const MainMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};
