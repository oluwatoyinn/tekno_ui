import React, {Fragment} from 'react'
// import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import {Form, Formik, Field } from 'formik';
import {RegistrationSchema} from '../utils/ValidationSchema'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux' 
// import {CustomMaterialUiForm} from '../components/CustomFormikFormInput'
import {register} from '../actions/authAction'
import PropTypes from 'prop-types';

// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {TextField} from 'formik-material-ui'

// SHOW PASSWORD
// import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
// import clsx from 'clsx'


const HooksRegister = ({register}) => {
    const history =useHistory()
 
    // Show password start from here
   

    const [values, setValues] = React.useState({
        showPassword: false,
        confirmPassword:false
      });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
        };

    const handleShowPassword = () => {
        setValues({ ...values, confirmPassword: !values.confirmPassword });
        };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    //   show password ends here

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
                        onSubmit={async(data,{setSubmitting})=>{
                            setSubmitting(false);
                            register(data,history)
                            // alert(JSON.stringify(data, null, 2));
                        }}
                        validationSchema = {RegistrationSchema}
                    >
                       {({submitForm,isSubmitting})=>(

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
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    variant="filled"
                                                    name="password"
                                                    autoComplete="current-password"
                                                    component={TextField}
                                                    InputProps={{
                                                        endAdornment:(
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                // onClick={showPassword} 
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                                >
                                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />

                                                <Field
                                                    label="Confirm Password"
                                                    type={values.confirmPassword ? 'text' : 'password'}
                                                    variant="filled"
                                                    name="password_confirmation"
                                                    autoComplete="current-password"
                                                    component={TextField}
                                                    InputProps={{
                                                        endAdornment:(
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleShowPassword}
                                                                // onClick={showPassword} 
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                                >
                                                                {values.confirmPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                    
                                                <div>
                                                    <Button 
                                                        startIcon={isSubmitting ? <CircularProgress size="1rem" /> :null}
                                                        type="submit" 
                                                        variant="contained" 
                                                        color="primary" 
                                                        className=" m-2" 
                                                        disabled={isSubmitting}  
                                                        onClick={submitForm}
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

const mapStateToProps =state=>({
    showPassword:state.authReducer.showPassword
})

export default connect(mapStateToProps,{register})(HooksRegister)


// export default SignUp;

