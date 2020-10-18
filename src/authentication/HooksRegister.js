import React, {Fragment} from 'react'
// import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import {Form, Formik, Field } from 'formik';
import {RegistrationSchema} from '../utils/ValidationSchema'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux' 
import {CustomMaterialUiForm} from '../components/CustomFormikFormInput'
import {register} from '../actions/authAction'
import PropTypes from 'prop-types';

// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {TextField} from 'formik-material-ui'


const HooksRegister = ({register}) => {
    const history =useHistory()
 
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '50ch',
            },
        },
        button:{
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    }));

    const classes = useStyles();
    
    return (
            <Fragment>    
                    <Formik initialValues={{
                            name:'',
                            email:'',
                            password:'',
                            password_confirmation:''
                        }}
                        onSubmit={async(data)=>{
                            // setSubmitting(true);
                            register(data,history)
                        }}
                        validationSchema = {RegistrationSchema}
                    >
                       {({isSubmitting})=>(

                            <Form className={classes.root}  noValidate autoComplete="off" >  
                                <div className="login_body">
                                    <div className="sign-up-form">
                                        <h2 className="text-uppercase header">register</h2>
                                        
                                            <div>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    label="Name"
                                                    variant="filled" 
                                                    id="outlined-error" 
                                                    component={TextField}
                                                />

                                                <Field
                                                    id="standard-email-input"
                                                    label="Email"
                                                    type="email"
                                                    variant="filled"
                                                    name="email"
                                                    component={TextField}
                                                />
                                                <Field
                                                
                                                    label="Password"
                                                    type="password"
                                                    variant="filled"
                                                    name="password"
                                                    autoComplete="current-password"
                                                    component={TextField}
                                                />
                                                <Field
                                                    id="standard-password-input"
                                                    label="Confirm Password"
                                                    type="password"
                                                    variant="filled"
                                                    name="password_confirmation"
                                                    autoComplete="current-password"
                                                    className="pb-3"
                                                    component={TextField}
                                                />
                                                <div>
                                                    <Button 
                                                        startIcon={isSubmitting ? <CircularProgress size="1rem" /> :null}
                                                        type="submit" 
                                                        variant="contained" 
                                                        color="primary" 
                                                        className=" m-2" 
                                                        disabled={isSubmitting}  
                                                    >
                                                    Register
                                                    </Button>
                                                    <p>Already have an account? <Link to="/">Sign in</Link> </p> 
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </Form>
                        )}
                    </Formik>
        </Fragment>
    )
}

HooksRegister.propTypes ={
    register:PropTypes.func.isRequired
}

export default connect(null,{register})(HooksRegister)


// export default SignUp;

