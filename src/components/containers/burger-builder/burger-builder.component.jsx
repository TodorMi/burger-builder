import React, { useState, useEffect, useCallback, Fragment } from 'react';
import BuildControls from '../../burger/build-controls/build-controls.component';
import Burger from '../../burger/burger.component';
import OrderSummary from '../../burger/order-summary/order-summary.component';
import Model from '../../ui/model/model.component';
import axios from '../../../axios-orders';

import Spinner from '../../ui/spinner/spinner';
import WithErrorHandler from '../../hoc/with-error-handler';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index.action';
const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ing = useSelector((state) => {
    return state.burgerBuilder.ingredients;
  });
  const price = useSelector((state) => state.burgerBuilder.totalPrice);
  const error = useSelector((state) => state.burgerBuilder.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onIngredientAdded = (ingName) =>
    dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) =>
    dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) =>
    dispatch(actions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push('/checkout');
  };

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const disabledInfo = {
    ...ing,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;
  if (ing) {
    burger = (
      <Fragment>
        <Burger ingredients={ing} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemove={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ing)}
          ordered={purchaseHandler}
          price={price}
          isAuth={isAuthenticated}
        />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ing}
        price={price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  return (
    <Fragment>
      <Model show={purchasing} modelClosed={purchaseCancelHandler}>
        {orderSummary}
      </Model>
      {burger}
    </Fragment>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
