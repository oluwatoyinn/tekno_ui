import * as Yup from 'yup'

export const RegistrationSchema = Yup.object().shape({
    name: Yup.string().min(5, "must be more than 5 character ").required("required"),
    password: Yup.string().min(5, "must be more than 5 character").required("Password is required"),
    email: Yup.string().email("Invalid email address").required("Enter a valid email address"),
    confirmPassword:Yup.string("Enter your password").required("Confirm your password").oneOf([Yup.ref("password")],"Password does not match"),
})