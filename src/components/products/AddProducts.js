import React from 'react' 
import { useDispatch } from 'react-redux'
import ProductsForm from './ProductsForm'
import { startCreateAProduct } from '../../actions/productAction'

const AddProducts = (props) => {
    const dispatch = useDispatch()
    const formSubmit = (formData) => {
        dispatch(startCreateAProduct(formData))
    }
    return (
        <div className="shadow mb-5 p-2 rounded" style={{ backgroundColor: '#3AAFA9', color: '#17252A'}}>
            <h2 className='my-4 font-weight-bold-display-4'>Add Products</h2>
            <ProductsForm formSubmit={formSubmit}/>
        </div>
    )
}

export default AddProducts