import React, {Fragment } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux' 
import {register} from '../actions/authAction'
import PropTypes from 'prop-types';
import {RegistrationSchema} from '../utils/ValidationSchema'
import {Form, Formik} from 'formik';
import {CustomFormInput} from '../components/CustomFormikFormInput'

const Register =({register}) => {
    const history = useHistory();

return (
    <Fragment>

        <Formik initialValues={{
            name:'',
            email:'',
            password:'',
            password_confirmation:''
        }}
        onSubmit={async(data, {setSubmitting})=>{
            setSubmitting(true);
            register(data, history)   
        }}
        validationSchema={RegistrationSchema}
        >

        {({values,errors,isSubmitting}) =>(
            <Form > 
                <div className="login_body">
                    <div className="sign-up-form">
                        <img src="img2/chris.png" alt="" />
                            <h2 className="text-uppercase header">register an account</h2>

                            <CustomFormInput
                                label="Name"
                                labelFor="name"
                                name="name"
                                type="text"
                            />

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

                            <CustomFormInput
                                label="Confirm Password"
                                labelFor="name"
                                name="password_confirmation"
                                type="password"
                            />  

                            <button type="submit" 
                                className="signup-btn" 
                                disabled={isSubmitting}>Register</button>
                                 
                            <p>Already have an account? <Link to="/">Sign in</Link> </p>

                                {/* <pre>{JSON.stringify(values,null,2)}</pre>
                                <pre>{JSON.stringify(errors,null,2)}</pre>     */}
                    </div>
                </div>            
            </Form>
        )}
        </Formik>
        </Fragment>
    )
}

Register.propTypes ={
    register:PropTypes.func.isRequired
}
  
export default connect(null,{register})(Register)

