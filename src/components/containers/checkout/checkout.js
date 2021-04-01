import React from 'react';
import CheckoutSummary from '../../order/checkout-summary/checkout-summary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './contact-data/contact-data';
import { connect } from 'react-redux';

class Checkout extends React.Component {
  

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ing) {
      const purchasedRedirect = this.props.purchased ? 
        <Redirect to="/" />
       : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ing}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ing: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};


export default connect(mapStateToProps)(Checkout);
