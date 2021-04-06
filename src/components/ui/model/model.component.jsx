import React, { Fragment } from 'react';
import Backdrop from '../backdrop/backdrop.component';
import './model.component.css';

const Model = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== this.props.show ||
  //     nextProps.children !== this.props.children
  //   );
  // }

  return (
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
};

export default React.memo(
  Model,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
