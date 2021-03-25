import React from 'react';

import './navigation-item.css';

const NavigationItem = (props) => (
    <li className='navigation-item'>
      <a href={props.link} 
      className={`${props.active}`}>
      {props.children}</a>
    </li>
);


export default NavigationItem;
