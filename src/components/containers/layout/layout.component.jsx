import React, { Fragment, Component } from 'react';
import Toolbar from '../../navigation/toolbar/toolbar';
import './layout.component.css';
import SideDrawer from '../../navigation/side-drawer/side-drawer';
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className='content'>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
