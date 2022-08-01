import React from 'react'
import {useField , ErrorMessage} from 'formik'

export const TextField = ({label , ...props}) => {
    const [field,meta] = useField(props)
    //console.log(field,meta)
    return (
        <div className='mb-2 col-xl-3'>
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                style={{display:'inline'}}
                {...field} {...props}
                autoComplete='off' 
                placeholder={label}
            />
            <ErrorMessage component='div' name={field.name} className='error' />
        </div>
    )
}

export default TextField