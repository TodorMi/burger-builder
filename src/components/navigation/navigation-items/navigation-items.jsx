import React from 'react';
import NavigationItem from './navigation-item/navigation-item';

import './navigation-items.css';

const NavigationItems = (props) => (
  <ul className='navigation-items'>
    <NavigationItem link='/'>Burger Builder</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link='/orders'>Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link='/auth'>Authenticate</NavigationItem>
    ) : (
      <NavigationItem link='/logout'>Logout</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
