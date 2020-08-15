import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {login} from '../actions/authAction'
import {connect} from 'react-redux'
import MyLoader from '../components/HumanResources/MyLoader'
import {CustomFormInput} from '../components/CustomFormikFormInput'
import {Formik,Form} from 'formik'
import PropTypes from 'prop-types';
import {LoginSchema} from '../utils/ValidationSchema'


const Login = ({login, isAuthenticated,isLoading}) => {

    if(isAuthenticated) return <Redirect to="/dashboard" />

    return isLoading ? <MyLoader msg="Please wait..."/> :  (
        <Fragment>
            <Formik initialValues={{
                email:'',
                password:''
            }}
            onSubmit={async(data, {setSubmitting})=>{
                setSubmitting(true)
                login(data)
            }}
            validationSchema={LoginSchema}
            >
                {({values, errors})=>(
                    <Form>
                        <div className="login_body">
                            <div className="login_form">
                                <img src="img2/chris.png" alt="" />
                                    <h2 className="text-uppercase header">Login to your account</h2>

                                    <CustomFormInput
                                        label="Email"
                                        labelFor="email"
                                        name="email"
                                        type="email"
                                    />

                                     <CustomFormInput
                                        label="Password"
                                        labelFor="password"
                                        name="password"
                                        type="password"
                                    />

                                    <button type="submit" className="signup-btn" >Log in</button>
                                    <hr />
                                    <p className="or">OR</p> 
                                    <Link to="/dashboard"><button type="button" className="email-btn">Sign up with email</button></Link>
                                    <p>Don't have an account? <Link to="/register">Sign Up</Link> </p>
                                
                                        {/* <pre>{JSON.stringify(values,null,2)}</pre>
                                        <pre>{JSON.stringify(errors,null,2)}</pre>  */}
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </Fragment>
    )
}

Login.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    isLoading:PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    isAuthenticated:state.authReducer.isAuthenticated,
    isLoading:state.authReducer.isLoading
})    
export default connect(mapStateToProps,{login})(Login);

