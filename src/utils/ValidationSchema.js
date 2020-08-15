import * as Yup from 'yup'

export const RegistrationSchema = Yup.object().shape({
    
    name: Yup.string()
        .min(5, "must be more than 5 character ")
        .required("required"),
    password: Yup.string()
        .min(5, "must be at least 5 character")
        .required("Password is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Enter a valid email address"),
    password_confirmation:Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must match")
        .required('Confirm Password is required'),
})


export const LoginSchema = Yup.object().shape({
    email:Yup.string()
        .email("Invalid email address")
        .required("Enter a valid email address"),
    password:Yup.string()
        .min(5, "must be at least 5 character")
        .required("Password is required")
})