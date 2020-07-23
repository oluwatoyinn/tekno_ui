import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import {connect} from 'react-redux' 
import {ErrMsg} from "../utils/StyledConstant"
import {register} from '../actions/authAction'
import PropTypes from 'prop-types';
// import {RegistrationSchema} from '../utils/ValidationSchema'
// import {Form, Formik} from 'formik';

// import {successToast} from '../utils/Constant'
// import {ToastContainer} from 'react-toastify'
// import {useHistory} from 'react-router-dom'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            password_confirmation:'',

            alert:null
        }
      this.validator = new SimpleReactValidator();
    }

validateRegister =(event)=>{

    event.preventDefault()
    if(this.validator.allValid())
    {
        this.handleRegister()
    }else
    {
        this.validator.showMessages()
        this.forceUpdate()
    }
}

handleRegister =()=>{
    const data ={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.password_confirmation
    }
    this.props.register(data)
    this.props.history.push('/')
}

handleChange = event =>{
    this.setState({
        [event.target.name] :event.target.value
    })
}
    render() {

        const {name,email,password,password_confirmation}=this.state

        return (
            <Fragment>
            
                        <div className="login_body">
                            <div className="sign-up-form">
                                <img src="img2/chris.png" alt="" />
                                    <h2 className="text-uppercase header">register an account</h2>
                                    <form >                            
                                    <div className="register_form ">
                                        <label data-error="wrong" data-success="right" htmlFor="name">Name</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3"><i className="fas fa-user prefix grey-text" /></span>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name"
                                                    onChange={this.handleChange} 
                                                    className="form-control validate" />
                                            </div>
                                        <ErrMsg className="text-danger">{this.validator.message('name', name, 'required')}</ErrMsg>
                                    </div>  
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
                                                    onChange={this.handleChange} 
                                                    className="form-control validate" />
                                            </div>
                                        <ErrMsg className="text-danger">{this.validator.message('email', email, 'required')}</ErrMsg>
                                    </div>
                                    <div className="register_form">
                                        <label data-error="wrong" data-success="right" htmlFor="name">Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3"><i className="fa fa-key prefix grey-text" /></span>
                                                </div>
                                                <input 
                                                    type="password" 
                                                    id="password" 
                                                    name="password"
                                                    onChange={this.handleChange} 
                                                    className="form-control validate"
                                                    />
                                            </div>
                                        <ErrMsg className="text-danger">{this.validator.message('password', password, 'required')}</ErrMsg>
                                    </div>
                                    <div className="register_form">
                                        <label data-error="wrong" data-success="right" htmlFor="name">Confirm Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3"><i className="fa fa-check prefix grey-text" /></span>
                                                </div>
                                                <input 
                                                    type="password" 
                                                    id="password_confirmation" 
                                                    name="password_confirmation"
                                                    onChange={this.handleChange}
                                                    className="form-control validate"
                                                    />
                                            </div>
                                        <ErrMsg className="text-danger">{this.validator.message('password_confirmation', password_confirmation, 'required')}</ErrMsg>
                                    </div>                                  
                                    <button type="submit" className="signup-btn" onClick={this.validateRegister}>Register</button> 
                                    {/* <ToastContainer autoClose={5000} pauseOnHover draggable/> */}
                                    <p>Already have an account? <Link to="/">Sign in</Link> </p>
                                
                                </form>
                            </div>
                        </div>
              
                    {this.state.alert}
            </Fragment>
        )
    }
}


Register.propTypes ={
    register:PropTypes.func.isRequired
}
  
  export default connect(null,{register})(Register)

