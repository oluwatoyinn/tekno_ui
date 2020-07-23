import React, { Component } from 'react'
import DisplayContent from './DisplayContent'
// import {Link} from 'react-router-dom'

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
