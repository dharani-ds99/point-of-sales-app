import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCraeteBill } from '../../actions/billAction'
import Select from 'react-select'
import BillsList from './BillsList'

const AddBill = (props) => {
    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState([{ product: "", quantity: 1 }])
    const [_id, set_Id] = useState('')
    const [cust, setCust] = useState('')
    const [total, setTotal] = useState(0)



    const handleChange = (e, i) => {
        const newFormvalues = [...formValues]
        newFormvalues[i][e.target.name] = e.target.value
        //console.log('add bill', newFormvalues)
        setFormValues(newFormvalues)
    }

    const addFormFields = () => {
        const newFormvalues = [...formValues, { product: '', quantity: 1 }]
        //console.log('add formfield',newFormvalues)
        setFormValues(newFormvalues)
    }

    const removeFormFields = (i) => {
        const newFormvalues = formValues.filter((ele, index) => { return index !== i })
        setFormValues(newFormvalues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const todayDate = new Date().toISOString().slice(0, 10)
        const formData = {
            date: todayDate, customer: _id, lineItems: [...formValues]

        }
        dispatch(startCraeteBill(formData, resetForm))
        setTotal(0)
    }

    const subTotalFun = (product, quantity) => {
        return products.data.find(ele => ele._id === product).price * quantity
    }


    const handleId = (cust) => {
        setCust(cust)
        set_Id(cust._id)
    }

    const resetForm = () => {
        setFormValues([{ product: '', quantity: 1 }])
        set_Id('')
    }
    //console.log('form values', formValues)

    useEffect(() => {
        if (formValues.every(ele => ele.product)) {
            let total = 0
            formValues.forEach(ele => { total += subTotalFun(ele.product, ele.quantity) })
            setTotal(total)
        }
    }, [formValues])

    return (<div>
        <div className="border shadow rounded p-2" style={{ backgroundColor: '#3AAFA9', color: '#17252A'}}>
            <h2 className=" d-inline">Add Bills</h2><h2 className="d-inline m-3" style={{ float: 'right'}}>Total:{total}</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ width: '40%', color: 'black' }} className="m-2">
                    <Select name="customer" options={customers.data} placeholder="--Select Customer--" value={customers.data.filter(function (option) {
                        return option.name === cust.name
                    })} getOptionLabel={(option) => option.name} label={(option) => option.name}
                        getOptionValue={(option) => option._id}
                        onChange={handleId}
                    />
                </div>

                {
                    formValues.map((ele, index) => (
                        <div className="form-inline " key={index}>
                            <select className='form-select d-inline m-2' name='product' value={ele.product || ''} style={{ width: '40%' }} onChange={(e) => {handleChange(e,index)}}>
                                <option>--Select Product--</option>
                                {
                                    products.data.map((ele, i) => {
                                        return <option key={ele._id} value={ele._id}>{ele.name}</option>
                                    })
                                }
                            </select>

                            <input type='number' className="form-control  d-inline m-2 " name='quantity' min="1" max="99" placeholder="Quantity" value={ele.quantity || ""} onChange={(e) => {handleChange(e,index)}} style={{ width: '20%' }} />
                            {ele.product && <h5 className="d-inline p-2">{subTotalFun(ele.product, ele.quantity)}</h5>}
                            {
                                index ? <button type="button" className="button remove btn btn-danger m-2 " onClick={() => removeFormFields(index)}>Remove</button>
                                    : null
                            }
                        </div>
                    ))
                }
                <div className="botton-section">
                    <button className="button add btn m-2" style={{backgroundColor:'#2B7A78',color:'white'}} onClick={() => addFormFields()}>Add</button>
                    <button className="button submit  btn m-2"style={{backgroundColor:'#17252A',color:'white'}} type="submit">Submit</button>
                </div>
            </form>
        </div>
            <div>
                <BillsList _id={_id} />
            </div>

        
    </div>)
}

export default AddBill