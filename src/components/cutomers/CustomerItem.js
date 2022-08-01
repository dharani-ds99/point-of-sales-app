import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import EditCustomer from './EditCustomer'
import { startDeleteCustomer } from '../../actions/customerAction'

const CustomerItem = (props) => {
    const {customer} = props
    const [toggle,setToggle]= useState(false)
    //console.log('cust item', customer)

    const dispatch = useDispatch()

    const handleToggle = () => {
        const result=!toggle
        setToggle(result)
    }

    const showCustomer= () => {
        swal(`Name  :  ${customer.name}
        Email  :  ${customer.email}
        Mobile  :  ${customer.mobile}
        Created At  :  ${customer.createdAt}
        Updated At  :  ${customer.updatedAt}`)
    }
    return (
        <div>
            {
                toggle ? (<div>
                    <EditCustomer customer={customer} handleToggle={handleToggle}/>
                    <button className='d-inline btn btn-dark m-3 ' onClick={handleToggle}>Cancel</button>
                </div>) : (<div className="m-4 p-3 rounded border shadow bg-light box">
                <div className="row ">
                    <div className="col-2">
                        <h4 className="d-inline">{customer.name}  </h4>
                    </div>
                    <div className="col-4">
                        <h4 className="d-inline">{customer.email}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="d-inline">{customer.mobile}</h4>
                    </div>
                    <div className="col-1">
                        <h4 className="d-inline "> <button style={{ backgroundColor: '#3AAFA9', color: '#17252A',textDecoration:'none'}} className="btn d-inline " onClick={() => {showCustomer()}} >SHOW</button></h4>
                    </div>
                    <div className="col-1">
                        <h4 className="d-inline"><button className="btn d-inline" style={{backgroundColor:'#17252A',color:'#3AAFA9'}} onClick={handleToggle} >EDIT</button></h4>
                    </div>
                    <div className="col-1">
                        <h4 className="d-inline"><button className="btn btn-danger d-inline" onClick={() => { dispatch(startDeleteCustomer(customer._id)) }}>DELETE</button></h4>
                    </div>

                </div>
            </div>)
            }
            
        </div>
        
    )
}

export default CustomerItem