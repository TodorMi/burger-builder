import React from 'react';
import Order from '../../order/order';

class Orders extends React.Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;
