import React, { Component } from 'react'
import DisplayContent from './DisplayContent'
import {Link} from 'react-router-dom'

class ContentWrapper extends Component {
    render() {
        return (
            <>
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper ">
  {/* Content Header (Page header) */}
  <div className="content-header ">
    <div className="container-fluid">
      <div className="row mb-2 wrap">
        <div className="col-sm-6 ">
          <h1 className="m-0 text-dark mt-2">Ambassadors</h1>
          <ol className="breadcrumb float-sm-left mt-2">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/">Customer Management</Link></li>
            <li className="breadcrumb-item">User Profile</li>
          </ol>
        </div>
        <div className="col-sm-6">
          <li className="nav-item has-treeview menu-open">
          <ul className="nav nav-treeview float-sm-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-chevron-circle-left" ><span className="mt-3">Go Back</span> </i> 
              </Link>
            </li>
          </ul>
          </li>
        </div>
      </div>
    </div>
  </div>


  <div className="content">
    <div className="container-fluid">
     <DisplayContent />
    </div>
  </div>

</div>

            </>
        )
    }
}

export default ContentWrapper
