import React, {useEffect} from 'react'
import {Link,NavLink} from "react-router-dom"
// import {loadTree} from '../utils/TreeHelper'

export default function Asidebar() {
    
  useEffect(() => {
    const trees = window.$ ('[data-widget="treeview"]');
    // trees.treeview('init');
    }, []);

  return (
    <>
    {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/dashboard" className="brand-link">
    <img src="dist/img/tekno.png" alt="logo" className=" avatar brand_image img-circle"  /> <br/>
    <span className="brand-text font-weight-bold">Welcome Victor</span>
    <p className="img_text">victor.ajayi@teknokleen.com</p>
  </Link>

  <hr/>
 
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
          
          <ul className="nav nav-treeview">
            {/* <li className="nav-item">
              <Link to="" className="nav-link active">
                <i className="fas fa-th nav-icon" />
                <p>Dashboard</p>
              </Link>
            </li> */}
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" activeStyle={{color:'red'}}>
                <i className="fa fa-user-plus nav-icon" />
                <p>Ambassadors</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/employees" className="nav-link" activeStyle={{color:'red'}}>
                <i className="fa fa-users nav-icon" />
                <p>Employees</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/salary" className="nav-link" activeStyle={{color:'red'}}>
              <i className="fa fa-calculator nav-icon" />
                <p>Salaries</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/clients" className="nav-link" activeStyle={{color:'red'}}>
              <i className="fas fa-shopping-bag nav-icon"></i>
                <p>Clients</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/leave" className="nav-link" activeStyle={{color:'red'}}>
              <i className=" nav-icon fas fa-cog"></i>
                <p>Leave</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/department" className="nav-link">
              <i className=" nav-icon fas fa-cog"></i>
                <p>Department</p>
              </Link>
            </li>
          </ul>
        </li>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
  
      
    </>
  )
}

