import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DashBoard from '../views/DashBoard'
import {Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, "must be more than 5 character ").required("required"),
    password: Yup.string().min(5, "must be more than 5 character").required("Password is required"),
    email: Yup.string().email("Invalid email address").required("Enter a valid email address"),
    confirmPassword:Yup.string("Enter your password").required("Confirm your password").oneOf([Yup.ref("password")],"Password does not match"),
})

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    render() {
        return (
            <>
            
            <Formik initialValues={
                {
                    name:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validationSchema={validationSchema}
                >
                 {formik=>(
                        <div className="login_body">
                            <div className="sign-up-form">
                                <img src="img2/chris.png" />
                                    <h2 className="text-uppercase header">register an account</h2>
                                <form>                            
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
                                                    {...formik.getFieldProps('name')}
                                                    className="form-control validate" />
                                                    {formik.errors.name && formik.touched.name  ? (<div style={{color: 'red'}} >{formik.errors.name}</div>) :null}

                                            </div>
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
                                                    className="form-control validate" 
                                                    {...formik.getFieldProps('email')}
                                                    />
                                                    {formik.errors.email && formik.touched.email  ? (<div style={{color: 'red'}} >{formik.errors.email}</div>) :null}
                                            </div>
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
                                                    {...formik.getFieldProps('password')}
                                                     />
                                                    {formik.errors.password && formik.touched.password  ? (<div style={{color: 'red'}} >{formik.errors.password}</div>) :null}
                                            </div>
                                    </div>
                                    <div className="register_form">
                                        <label data-error="wrong" data-success="right" htmlFor="name">Confirm Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3"><i className="fa fa-check prefix grey-text" /></span>
                                                </div>
                                                <input 
                                                    type="password" 
                                                    id="password" 
                                                    name="password"
                                                    onChange={this.handleChange} 
                                                    className="form-control validate"
                                                    {...formik.getFieldProps('confirmPassword')}
                                                    />
                                                    {formik.errors.confirmPassword && formik.touched.confirmPassword  ? (<div style={{color: 'red'}} >{formik.errors.confirmPassword}</div>) :null}
                                            </div>
                                    </div>                                  
                                    <Link to="/dashboard"><button type="button" className="signup-btn">Register</button> </Link> 
                                    <p>Already have an account? <Link to="/">Sign in</Link> </p>
                                   
                                </form>
                            </div>
                        </div>
                    )}
                    
            </Formik>

            </>
        )
    }
}

export default Login
