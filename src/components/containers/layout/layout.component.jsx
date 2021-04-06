import React, { Fragment, useState } from 'react';
import Toolbar from '../../navigation/toolbar/toolbar';
import './layout.component.css';
import SideDrawer from '../../navigation/side-drawer/side-drawer';
import { connect } from 'react-redux';

const Layout = (props) => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  };

  return (
    <Fragment>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerVisible}
        closed={sideDrawerClosedHandler}
      />
      <main className='content'>{props.children}</main>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
