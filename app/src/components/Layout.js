// In Layout.js
import React  from 'react';
import { Outlet } from 'react-router-dom';
import {Link } from "react-router-dom";
function Layout() {
  return (
  <div>
  <div>Simple Layot</div>
 <ul>
    <li>
      <Link to="/work">work</Link>

    </li>
    <li>
       <Link to="/">home</Link>
    </li>
</ul>
  </div>
  );
}
export default Layout;