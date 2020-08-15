import React, {useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {login} from '../actions/authAction'
import {connect} from 'react-redux'
// import MyLoader from '../components/HumanResources/MyLoader'
import {Formik,Form,ErrorMessage} from 'formik'
import PropTypes from 'prop-types';
import {LoginSchema} from '../utils/ValidationSchema'


const HooksLogin = () => {

    // if(this.props.isAuthenticated) return <Redirect to="/dashboard" />

    return (
        <React.Fragment>
            <Formik initialValues={{
                email:"",
                password:""
            }}
            validationSchema={LoginSchema}
            >
                {({values, errors,handleChange, touched})=>(
                    <Form>
                        <div className="login_body">
                            <div className="login_form">
                                <img src="img2/chris.png" alt="" />
                                    <h2 className="text-uppercase header">Login to your account</h2>
                                                        
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
                                                    onChange={handleChange} 
                                                    className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
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
                                                    onChange={handleChange} 
                                                    className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                            </div>
                                    </div>                                      
                                    <button type="submit" className="signup-btn" >Log in</button>
                                    <hr />
                                    <p className="or">OR</p> 
                                    <Link to="/dashboard"><button type="button" className="email-btn">Sign up with email</button></Link>
                                    <p>Don't have an account? <Link to="/register">Sign Up</Link> </p>
                                
                            </div>
                        </div>
                    </Form>
                )}

        </Formik>
       

        </React.Fragment>
    )
}

HooksLogin.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    isLoading:PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    isAuthenticated:state.authReducer.isAuthenticated,
    isLoading:state.authReducer.isLoading
})    
export default connect(mapStateToProps,{login})(HooksLogin);

