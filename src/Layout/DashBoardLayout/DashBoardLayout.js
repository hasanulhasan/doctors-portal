import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DashBoardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li><Link to='/dashboard'>My appointment</Link></li>
            <li><Link to='/dashboard/allusers'>All Users</Link></li>
            <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
            <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;