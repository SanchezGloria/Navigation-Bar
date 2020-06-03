import React, { useState, useEffect, useRef } from 'react';
import NavItem from './NavItem';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    return setOpen(!open);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />} open={open} handleOpen={handleOpen} />
      </ul>
    </nav>
  );
};

export default NavBar;
