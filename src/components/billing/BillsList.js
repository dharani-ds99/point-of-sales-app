import React from 'react'
import { useSelector } from 'react-redux'
import BillItem from './BillItem'

const BillsList = (props) => {
    const {_id} = props 
    const bills = useSelector(state => state.bills)

    const billsOrder = (orderBy) => {
        switch(orderBy){
            case '':return [...bills.data]
            case orderBy: return [...bills.data.filter(ele => ele.customer !== _id || '')]
            default: return [...bills.data]
        }
    }
    return (
        <div className='container'>
            <h2 className='border p-3 m-4 rounded' style={{ backgroundColor: '#17252A', color: '#3AAFA9',textAlign:'center'}}>Listing Bills - {billsOrder(_id).length}</h2>
            {
                billsOrder(_id).map((ele,i) => {
                    return <BillItem ele={ele} key={i}/>
                })
            }

        </div>
    )
}

export default BillsList