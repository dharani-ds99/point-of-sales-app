import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { startDeleteProduct } from '../../actions/productAction'
import EditProduct from './EditProduct'

const ProductItem = ({ product }) => {
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleToggle = () => {
        const toggleInput=!toggle
        setToggle(toggleInput)
    }

    //show product information
    const showProduct = () => {
        swal(`Name : ${product.name}
        Price : ${product.price}
        Created At : ${product.createdAt}
        Updated At : ${product.updatedAt}`)
    }
    return (
        <div>{
            toggle ? <div>
                <EditProduct product={product} handleToggle={handleToggle} />
                <button className='d-inline btn btn-dark m-3 ' onClick={handleToggle}>Cancel</button>
            </div> : <div className="m-4 p-3 rounded border shadow bg-light box">
                <div className="row ">
                    <div className="col-2">
                        <h4 className="d-inline">{product.name}  </h4>
                    </div>
                    <div className="col-3">
                        <h4 className="d-inline">{product.price}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="d-inline "> <button style={{ backgroundColor: '#3AAFA9', color: '#17252A'}} className="btn d-inline " onClick={() => { showProduct() }} >SHOW</button></h4>
                    </div>
                    <div className="col-2">
                        <h4 className="d-inline"><button className="btn d-inline "  style={{backgroundColor:'#17252A',color:'#3AAFA9'}} onClick={handleToggle} >EDIT</button></h4>
                    </div>
                    <div className="col-2">
                        <h4 className="d-inline"><button className="btn btn-danger d-inline" onClick={() => { dispatch(startDeleteProduct(product._id)) }}>DELETE</button></h4>
                    </div>

                </div>
            </div>}

        </div>
    )
}
export default ProductItem