import React, { Fragment } from "react";
import './layout.component.css'
const Layout = (props) => (
  <Fragment>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className='content'>{props.children}</main>
  </Fragment>
);

export default Layout;
