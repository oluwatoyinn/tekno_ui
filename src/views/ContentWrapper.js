import React, { Component } from 'react'
import DisplayContent from './DisplayContent'

class ContentWrapper extends Component {
    render() {
        return (
            <>
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Customers</h1>
          <ol className="breadcrumb float-sm-left">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Customer Management</a></li>
            <li className="breadcrumb-item active">User Profile</li>
          </ol>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <li className="nav-item has-treeview menu-open">
          <ul className="nav nav-treeview float-sm-right">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="fas fa-chevron-circle-left"></i>
                <p>Go Back</p>
              </a>
            </li>
          </ul>
          </li>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
     <DisplayContent />
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>
{/* /.content-wrapper */}
 
            </>
        )
    }
}

export default ContentWrapper
