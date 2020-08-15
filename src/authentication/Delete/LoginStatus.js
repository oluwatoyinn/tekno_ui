import React, { Component,Fragment } from 'react'
import {Link,Redirect} from 'react-router-dom'
// import { regUrl } from '../utils/ApiCalls'
import SimpleReactValidator from 'simple-react-validator'
import {ErrMsg} from '../utils/StyledConstant'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import MyLoader from '../components/HumanResources/MyLoader'
// import axios from 'axios' 
import {login} from '../actions/authAction'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        }
          
      this.validator = new SimpleReactValidator();
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    validateLogin =(event)=>{

        event.preventDefault()
        if(this.validator.allValid())
        {
            this.handleLogin()
            // this.props.getLoginUser()
        }else
        {
            this.validator.showMessages()
            this.forceUpdate()
        }
    }

    handleLogin =()=>{
        const data ={
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(data)
    }

    render() {
        const {email,password}=this.state
        const {isLoading} = this.props

        if(this.props.isAuthenticated) return <Redirect to="/dashboard" />

        return isLoading ? <MyLoader msg="Please wait..."/> :  (
            <Fragment>
                <div className="login_body">
                    <div className="login_form">
                        <img src="img2/chris.png" alt="" />
                            <h2 className="text-uppercase header">Login to your account</h2>
                        <form>                             
                            <div className="register_form ">
                                <label data-error="wrong" data-success="right" htmlFor="name">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fas fa-envelope prefix grey-text" /></span>
                                        </div>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value= {email}
                                            onChange={this.handleChange} 
                                            className="form-control validate" />
                                    </div>
                                    <ErrMsg className="text-danger">{this.validator.message('email', email, 'required')}</ErrMsg>
                            </div>
                            <div className="register_form ">
                                <label data-error="wrong" data-success="right" htmlFor="name">Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fa fa-key prefix grey-text" /></span>
                                        </div>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password"
                                            value= {password}
                                            onChange={this.handleChange} 
                                            className="form-control validate" />
                                    </div>
                                    <ErrMsg className="text-danger">{this.validator.message('password', password, 'required')}</ErrMsg>
                            </div>                                      
                            <button type="submit" className="signup-btn" onClick={this.validateLogin}>Log in</button>
                            <hr />
                            <p className="or">OR</p> 
                            <Link to="/dashboard"><button type="button" className="email-btn">Sign up with email</button></Link>
                            <p>Don't have an account? <Link to="/register">Sign Up</Link> </p>
                        </form>
                    </div>
                 </div>

                </Fragment>
            
        )
    }
}
 
//  Login.propTypes ={
//      LoginAction: PropTypes.func.isRequired
//  }

//  Login.contextType ={
//      router:PropTypes.object.isRequired
//  }

Login.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    isLoading:PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    isAuthenticated:state.authReducer.isAuthenticated,
    isLoading:state.authReducer.isLoading
})    
export default connect(mapStateToProps,{login})(Login);

// const mapStateToProps = state => ({
//     getLoginUser:state.getLoginUser
//   })
  
//   export default connect(mapStateToProps,{getLoginUser})(Login)
