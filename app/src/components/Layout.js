// In Layout.js
import React  from 'react';
import { Outlet } from 'react-router-dom';
import {Link } from "react-router-dom";
function Layout() {
  return (
  <div>
  <div className='text-xl'>Simple Layout</div>
 <ul>
    <li>
      <Link to="/login" >login</Link>

    </li>
    <li>
       <Link to="/">home</Link>
    </li>
</ul>
  </div>
  );
}
export default Layout;