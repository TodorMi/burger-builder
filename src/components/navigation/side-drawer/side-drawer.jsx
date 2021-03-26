import React, { Fragment } from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';
import './side-drawer.css';
import Backdrop from '../../ui/backdrop/backdrop.component';

const SideDrawer = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`side-drawer ${props.open ? 'open' : 'close'}`}>
        <nav>
          <NavigationItems />
        </nav>
        <Logo />
      </div>
    </Fragment>
  );
};

export default SideDrawer;
