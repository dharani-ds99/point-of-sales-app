import React from 'react'
import { useDispatch } from 'react-redux'
import { startUpdateaCustomer } from '../../actions/customerAction'
import Form from './CustomerForm'

const EditCustomer = ({customer,handleToggle}) => {

    const dispatch=useDispatch()

    const formSubmit = (formData) => {
        dispatch(startUpdateaCustomer(formData,customer._id))
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <Form {...customer} formSubmit={formSubmit} handleToggle={handleToggle}/>
            
        </div>
    )
}
export default EditCustomer