import React from 'react';
import NavigationItem from './navigation-item/navigation-item';

import './navigation-items.css';

const NavigationItems = (props) => (
  <ul className='navigation-items'>
    <NavigationItem link='/' >Burger Builder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
