import React from 'react';
import './button.component.css';

const Button = (props) => (
  <button
    disabled={props.disabled}
    className={`Button ${props.btnType}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
