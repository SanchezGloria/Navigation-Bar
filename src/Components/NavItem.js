import React from 'react';
import DropMenu from './DropMenu';
// import { ReactComponent as CogIcon } from './icons/cog.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';

const NavItem = (props) => {
  const handleOpen = (ev) => {
    props.handleOpen(ev.currentTarget);
  };

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={handleOpen}>
        {props.icon}
      </a>
      {/* {props.open && <DropMenu />} */}
    </li>
  );
};

export default NavItem;
