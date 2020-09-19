import React, { Fragment } from 'react'
import {useField} from 'formik'

export const CustomFormInput = ({labelFor,label, ...props})=>{
    const [field,meta] = useField(props)
    return (
        <Fragment>
            <div className="register_form ">
                <label data-error="wrong" data-success="right" htmlFor={labelFor}>{label}</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3"><i className="fas fa-envelope prefix grey-text" /></span>
                    </div>
                    <input
                    {...field}
                    {...props}
                    className={'form-control' + (meta.error && meta.touched ? ' is-invalid' : '')} 
                    />
                    {/* <ErrorMessage name={name} component="div" className="invalid-feedback" /> */}
                    {meta.error&&meta.error?(
                            <div className="invalid-feedback">
                                {meta.error}
                            </div> 
                        ) : null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export const CustomClientForm =({labelFor,label,...props})=>{
    return(
        <Fragment>
             <div className="col-12">
                <label data-error="wrong" data-success="right" htmlFor={labelFor}>{label}</label>
                        <input className="clientInput"
                         {...props}
                        />
                   
            </div>
        </Fragment>
    )
}

export const CustomClassEmployeeForm =({labelFor,label,...props})=>{
    // const [field,meta] = useField(props)
    return(
        <Fragment>
             <div className=" col-6 mb-3 ">
                <label data-error="wrong" data-success="right" htmlFor={labelFor}>{label}</label>
                    <div className="input-group mb-3" >

                        <input className="empInput"
                        {...props}
                        />

                </div>
            </div>
        </Fragment>
    )
}

