import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    const products=useSelector(state => state.products)

    const [search,setSearch] = useState('')
    const [orderBy,setOrderBy] = useState('')

    const handleSearch = (e) => {
        const inputValue=e.target.value
        setSearch(inputValue.toLowerCase())
    }

    const handleOrder = (e) => {
        setOrderBy(e.target.value)
    }

    const orderedData = (orderBy) => {
        switch(orderBy){
            case "A-Z":return [...[].concat(products.data).sort((a,b) => a.name.localeCompare(b.name))]
            case "Z-A":return [...[].concat(products.data).sort((a,b) => b.name.localeCompare(a.name))]
            case "Reverse":return [...[].concat(products.data).reverse()]
            default:return [...products.data]
        }
    }
    return (
        <div className='container'>
            <center ><h1 className='border p-3 m-4 rounded' style={{ backgroundColor: '#17252A', color: '#3AAFA9'}}>Products List - {products.data.length}</h1></center>

            <input className='col-ml-4' type="text" placeholder='search here' value={search} onChange={handleSearch} style={{margin:30, height: 35,padding: 15,borderRadius: '50px'}}/>
            <select className='col-mr-4' value={orderBy} onChange={handleOrder} style={{ height:35,width:150,margin: 25 , padding: 5,borderRadius: '50px'}}>
                <option value="">Order By</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Reverse">Reverse</option>
            </select>

            {orderedData(orderBy).filter((ele) => ele.name.includes(search)).map((product,i) => {
                return <ProductItem key={i} product={product} />
            })}

        </div>
    )
}

export default ProductList