import React, { Fragment } from 'react';
import Backdrop from '../backdrop/backdrop.component';
import './model.component.css';

const Model = (props) => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modelClosed} />
    <div
      className='model'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Model;
