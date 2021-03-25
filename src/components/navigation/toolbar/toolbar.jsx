import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';

import './toolbar.css';

const Toolbar = (props) =>(
    <header className="toolbar">
        <div>Menu</div>
        <Logo/>
        <NavigationItems/>
    </header>
);

export default Toolbar;