import React, { Fragment } from "react";
import Toolbar from "../navigation/toolbar/toolbar";
import './layout.component.css'
const Layout = (props) => (
  <Fragment>
    <Toolbar/>
    <main className='content'>{props.children}</main>
  </Fragment>
);

export default Layout;
