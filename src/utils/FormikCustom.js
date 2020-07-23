import React from 'react'
import {useField} from 'formik'

export const MyFormField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label>
          {label}
          <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? ( <div className='error'>{meta.error}</div> ) : null}
      </>
    );
  };