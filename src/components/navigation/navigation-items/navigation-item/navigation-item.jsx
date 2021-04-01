import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation-item.css';

const NavigationItem = (props) => {
  return (
    <li className='navigation-item'>
      <NavLink to={props.link} exact>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
