import * as actionTypes from '../actions/action-types';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const PurchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false,
  });
};
const PurchaseBurgerStart = (state, action) => {
  return updateObject(state, console.log('[PurchaseStart]', state), {
    loading: true,

    //false
  },  console.log("[PurchaseStart2]",state));
  
};
const PurchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    id: action.orderId,
  });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};
const PurchaseBurgerFail = (state, action) => {
  return updateObject(state, console.log(state), {
    loading: false,
    purchased: false,
  }, console.log("[PurchaseFail]", updateObject(state)));
};
const FetchOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};
const FetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};
const FetchOrdersFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};
const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return PurchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return PurchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return PurchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return PurchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return FetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return FetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return FetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default OrderReducer;
