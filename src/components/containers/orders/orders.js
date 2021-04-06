import axios from '../../../axios-orders';
import React from 'react';
import Order from '../../order/order';
import withErrorHandler from '../../hoc/with-error-handler';
import * as actions from '../../../store/actions/index.action';
import { connect } from 'react-redux';
import Spinner from '../../ui/spinner/spinner';
import { useEffect} from 'react';
const Orders = props => {
  const {onFetchOrders} = props;
  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  },[onFetchOrders])

  
    let orders = <Spinner />;
    if (!props.loading) {
      orders = props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }


const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
