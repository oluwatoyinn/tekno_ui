import React, {useState, Fragment, useEffect} from 'react'
import {Form, FormikProps, Formik,Field } from 'formik';
import {RegistrationSchema} from '../utils/ValidationSchema'
// import {MyFormField} from '../utils/FormikCustom'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux' 
import {register} from '../actions/authAction'
import PropTypes from 'prop-types';




const HooksRegister = () => {
    // const history = useHistory();
    const initiaState= {
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    }
    const [user, setUser] = useState({initiaState})
    // const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleRegister = (e) =>{
        e.preventDefault()
        const data ={
            name:user.name,
            email:user.email,
            password:user.password,
            password_confirmation:user.password_confirmation
        }
        this.register(data)
    //    this.props.history.push('/')
    }

    const {name,email, password_confirmation, password} = user
    return (
            <Fragment>     
            <div className="login_body">
                <div className="sign-up-form">
                    <img src="img2/chris.png" alt="" />
                        <h2 className="text-uppercase header">register an account</h2>
                    <Formik initialValues={
                            {name:'',
                            email:'',
                            password:'',
                            password_confirmation:''
                        }}
                        // onSubmit={async(data,{setSubmitting})=>{
                        //     setSubmitting(true);
                        //     register(data,history)
                        // }}
                        validationSchema = {RegistrationSchema}
                    >
                        {({touched,errors})=>(
                            
                            <Form >                           
                            <div className="register_form">
                                <label data-error="wrong" data-success="right" htmlFor="name">Name</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fas fa-user prefix grey-text" /></span>
                                        </div>
                                        <input 
                                            type="text"
                                            id="name" 
                                            name="name"
                                            value={name}
                                            onChange={handleChange} 
                                            className="form-control validate"/>
                                        {errors.name && touched.name ? (<div style={{color: 'red'}} >{errors.name}</div>) :null}
                                    </div>
                            </div>  
                            <div className="register_form ">
                                <label data-error="wrong" data-success="right" htmlFor="name">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fas fa-envelope prefix grey-text" /></span>
                                        </div>
                                        <Field 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={email}
                                            onChange={handleChange} 
                                            className="form-control validate" />
                                        {errors.email && touched.email   ? (<div style={{color: 'red'}} >{errors.email}</div>) :null}
                                    </div>
                                {/* <ErrMsg className="text-danger">{this.validator.message('email', email, 'required')}</ErrMsg> */}
                            </div>
                            <div className="register_form">
                                <label data-error="wrong" data-success="right" htmlFor="name">Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fa fa-key prefix grey-text" /></span>
                                        </div>
                                        <Field 
                                            type="password" 
                                            id="password" 
                                            name="password"
                                            value={password}
                                            onChange={handleChange} 
                                            className="form-control validate"
                                            />
                                        {errors.password && touched.password   ? (<div style={{color: 'red'}} >{errors.password}</div>) :null}
                                    </div>
                                {/* <ErrMsg className="text-danger">{this.validator.message('password', password, 'required')}</ErrMsg> */}
                            </div>
                            <div className="register_form">
                                <label data-error="wrong" data-success="right" htmlFor="name">Confirm Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3"><i className="fa fa-check prefix grey-text" /></span>
                                        </div>
                                        <Field 
                                            type="password" 
                                            id="password_confirmation" 
                                            name="password_confirmation"
                                            value={password_confirmation}
                                            onChange={handleChange} 
                                            className="form-control validate"
                                            />
                                        {errors.password_confirmation && touched.password_confirmation   ? (<div style={{color: 'red'}} >{errors.password}</div>) :null}
                                    </div>
                                {/* <ErrMsg className="text-danger">{this.validator.message('password_confirmation', password_confirmation, 'required')}</ErrMsg> */}
                            </div>                                  
                            <button type="submit" className="signup-btn" onClick={handleRegister} >Register</button> 
                            {/* <ToastContainer autoClose={5000} pauseOnHover draggable/> */}
                            <p>Already have an account? <Link to="/">Sign in</Link> </p>
                        </Form>
                        )}       
                    </Formik>
                </div>
            </div>
        </Fragment>
    )
}

HooksRegister.propTypes ={
    register:PropTypes.func.isRequired
}

export default connect(null,{register})(HooksRegister)


// export default SignUp;

