import React from 'react'
import AddCustomer from './AddCustomer'
import CustomersList from './CustomerList'

const CustomerContainer = (props) => {

    return (
        <div>
            <AddCustomer />
            <CustomersList />
        </div>
    )
}

export default CustomerContainer