import React from 'react';
import './backdrop.component.css';

const Backdrop = (props) =>
  props.show ? <div className='backdrop' onClick={props.clicked}></div> : null;

  export default Backdrop;
