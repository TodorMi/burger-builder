import { Component } from 'react';
import './App.css';
import BurgerBuilder from './components/containers/burger-builder/burger-builder.component';
import Checkout from './components/containers/checkout/checkout';
import Layout from './components/containers/layout/layout.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Orders from './components/containers/orders/orders';
import Auth from './components/containers/auth/auth.container';
import Logout from './components/containers/auth/logout/logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index.action';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route exact path='/' component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/logout' component={Logout} />
          <Route path='/auth' component={Auth} />
          <Route exact path='/' component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
