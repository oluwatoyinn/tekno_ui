import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../actions/authAction'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class NavBar extends Component {
    render() {

        return (
            <>
      {/* Navbar */}
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
    
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
      
      </form>

      <ul className="navbar-nav ml-auto">

        <button className="logout-btn">
          <li className="nav-item ">
            <Link className="nav-link" to="/login" onClick={()=>this.props.logout()}>
              {/* <i className="fas fa-sign-out" aria-hidden="true"/> */}
              <i className="fas fa-power-off fa-2x "></i>
            </Link>
          </li>
        </button>
        
      </ul>
    </nav>

            </>
        )
    }
}

NavBar.propTypes = {
  logout:PropTypes.func.isRequired,
  // isAuthenticated:PropTypes.bool.isRequired
}
// const mapStateToProps = state => ({
//   isAuthenticated: state.authReducer.isAuthenticated
// });

export default connect(null, {logout})(NavBar)
