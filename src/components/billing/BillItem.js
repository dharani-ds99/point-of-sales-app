import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startDeleteBill } from '../../actions/billAction'
import {Link} from 'react-router-dom'



const BillItem = (props) => {
    const {ele} = props 
    const customers=useSelector(state => state.customers.data)
    const dispatch=useDispatch()
    const name=(customers.length > 0 && customers.find(ele1 => ele1._id === ele.customer).name)
    return (<div className='p-3 m-4 rounded shadow border bg-light' >
        <div className='row'>
            <div className='col-3'>
                <h3 className='d-inline'>{name}</h3>
            </div>
            <div className='col-3'>
                <h3 className='d-inline'>{ele.date.slice(0,10)}</h3>
            </div>
            <div className='col-2'>
                <h3 className='d-inline'>{ele.total}</h3>
            </div>
            <div className='col-2'>
                <button className='d-inline btn' style={{ backgroundColor: '#3AAFA9', color: '#17252A'}}><Link style={{ textDecoration: 'none', color: 'white'}} to={`/bills/${ele._id}`}>Details</Link></button>
            </div>
            <div className='col-1'>
                <button className='d-inline btn btn-danger' onClick={() => {dispatch(startDeleteBill(ele._id))}}>Delete</button>
            </div>
        </div>

    </div>)
}

export default BillItem