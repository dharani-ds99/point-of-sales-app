import React from 'react'
import AddProducts from "./AddProducts" 
import ProductList from './ProductsList'

const ProductsContainer = () => {

    return (
        <div>
            <AddProducts />
            <ProductList />
        </div>
    )
}

export default ProductsContainer