import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DashBoard from '../views/DashBoard'
import {Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    password: Yup.string().min(5, "must be more than 5 character").required("Password is required"),
    email: Yup.string().email("Invalid email address").required("Enter a valid email address"),

})

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    render() {
        return (
            <>
            
            <Formik initialValues={
                {
                    email:'',
                    password:''
                }}
                validationSchema={validationSchema}
                >
                 {formik=>(
                        <div className="login_body">
                            <div className="login_form">
                                <img src="img2/chris.png" />
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
                                                    onChange={this.handleChange} 
                                                    {...formik.getFieldProps('email')}
                                                    className="form-control validate" />
                                                    {formik.errors.email && formik.touched.email  ? (<div style={{color: 'red'}} >{formik.errors.email}</div>) :null}

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
                                                    onChange={this.handleChange} 
                                                    {...formik.getFieldProps('name')}
                                                    className="form-control validate" />
                                                    {formik.errors.name && formik.touched.name  ? (<div style={{color: 'red'}} >{formik.errors.name}</div>) :null}

                                            </div>
                                    </div>                                      
                                    <Link to="/dashboard"><button type="button" className="signup-btn">Log in</button> </Link> 
                                    <hr />
                                    <p className="or">OR</p> 
                                    <button type="button" className="email-btn">Sign up with email</button>
                                    <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
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
