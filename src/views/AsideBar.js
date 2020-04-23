import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class AsideBar extends Component {
    render() {
        return (
            <>
     {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
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
            <li className="nav-item">
              <Link to="" className="nav-link active">
                <i className="fas fa-th nav-icon" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contractcleaning" className="nav-link">
                <i className="fa fa-user-plus nav-icon" />
                <p>Contract Cleaning</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/humanresources" className="nav-link">
                <i className="fa fa-users nav-icon" />
                <p>Human Resources</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
              <i className="fa fa-calculator nav-icon" />
                <p>Accounts</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clients" className="nav-link">
              <i className="fas fa-shopping-bag nav-icon"></i>
                <p>Clients</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/internalcontrol" className="nav-link">
              <i className=" nav-icon fas fa-cog"></i>
                <p>Internal Control</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/setting" className="nav-link">
              <i className=" nav-icon fas fa-cog"></i>
                <p>Settings</p>
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
}

export default AsideBar
