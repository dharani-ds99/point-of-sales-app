import React from 'react'
import { useDispatch } from 'react-redux'
import Form from './CustomerForm'
// import CustomerForm from './CustomerForm'
import {startCreateACustomer} from '../../actions/customerAction'

const AddCustomer = (props) => {
    
    const dispatch = useDispatch()

    //for add customer action generator
    const formSubmit = (formData) => {
        dispatch(startCreateACustomer(formData,localStorage.getItem('token')))
    }
    return (
        <div className="shadow mb-5 p-2 rounded" style={{ backgroundColor: '#3AAFA9', color: '#17252A'}}>
            <h2 className='my-4 font-weight-bold-display-4'>Add Customer</h2>
            {/* <CustomerForm formSubmit={formSubmit}/> */}
            <Form formSubmit={formSubmit}/>
        </div>
    )
}

export default AddCustomer
