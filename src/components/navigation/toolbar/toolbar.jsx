import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';
import DrawerToggle from '../side-drawer/drawer-toggle/drawer-toggle';

import './toolbar.css';

const Toolbar = (props) =>(
    <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo/>
        <NavigationItems/>
    </header>
);

export default Toolbar;