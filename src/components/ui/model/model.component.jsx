import React, { Fragment, Component } from 'react';
import Backdrop from '../backdrop/backdrop.component';
import './model.component.css';

class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log('[Model] did update');
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          className='model'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Model;
