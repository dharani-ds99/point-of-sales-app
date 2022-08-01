import React from 'react'
import { useDispatch } from 'react-redux'
import { startUpdateAProduct } from '../../actions/productAction'
import ProductsForm from './ProductsForm'
const EditProduct = (props) => {
    const {product,handleToggle} = props
    //console.log('edit',product)
    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        dispatch(startUpdateAProduct(formData,product._id))
    }
    return (
        <div>
            <h4>Edit Product</h4>
            <ProductsForm name={product.name} price={product.price} formSubmit={formSubmit} handleToggle={handleToggle}/>
        </div>
    )
}
export default EditProduct