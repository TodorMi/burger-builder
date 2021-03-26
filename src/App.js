import { Component } from 'react';
import './App.css';
import BurgerBuilder from './components/containers/burger-builder/burger-builder.component';
import Layout from './components/containers/layout/layout.component';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
