import React from 'react';
import NavigationItem from './navigation-item/navigation-item';

import './navigation-items.css';

const NavigationItems = (props) => (
  <ul className='navigation-items'>
    <NavigationItem link='/' active="active">Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
