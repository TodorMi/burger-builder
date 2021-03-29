import { Component } from 'react';
import './App.css';
import BurgerBuilder from './components/containers/burger-builder/burger-builder.component';
import Checkout from './components/containers/checkout/checkout';
import Layout from './components/containers/layout/layout.component';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Orders from './components/containers/orders/orders';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route  path='/orders' component={Orders} />
            <Route exact path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
