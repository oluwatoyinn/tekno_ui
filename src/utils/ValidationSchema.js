import * as Yup from 'yup'

export const RegistrationSchema = Yup.object().shape({
    
    name: Yup.string()
        .min(4, "must be more than 4 character ")
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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const EmployeeSchema = Yup.object().shape({
    firstName:Yup.string()
        .min(2, "must be more than 2 character")
        .required("required"),
    middleName:Yup.string()
        .min(2, "must be more than 2 characters"),
    lastName:Yup.string()
        .min(2, "must be more than 3 characters")
        .required("required"),
    DOB:Yup.date()
        // .transform(parseDateString)
        .max(new Date()),
    email:Yup.string()
        .email("Invalid email address")
        .required("Please enter a valid email address"),
    gender:Yup.string()
        .required("Please specify the gender"),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Enter your contact number"),
    employedDate:Yup.date()
        // .transform(parseDateString)
        .max(new Date())
})
