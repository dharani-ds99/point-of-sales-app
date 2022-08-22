import React, { useState } from 'react'

const ProductsForm = (props) => {
    const {handleToggle, formSubmit, name: prodName, price: prodPrice } = props
    const [name, setName] = useState(prodName ? prodName : '')
    const [price, setPrice] = useState(prodPrice ? prodPrice : '')

    const handleChange = (e) => {
        const result = e.target.value
        const nameCheck = e.target.name
        if (nameCheck === 'name') {
            setName(result)
        } else if (nameCheck === 'price') {
            setPrice(result)
        }
    }

    const handleReset = () => {
        setName('')
        setPrice('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name, price
        }
        console.log('form data in prodform', formData)
        formSubmit(formData)
        handleReset()
        handleToggle()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter name' value={name} name="name" onChange={handleChange} />
                <input type="text" placeholder='enter price' value={price} name="price" onChange={handleChange} />
                <button className='btn m-2' style={{backgroundColor: '#17252A', color: '#3AAFA9'}}>Add</button>

            </form>
        </div>
    )
}

export default ProductsForm



