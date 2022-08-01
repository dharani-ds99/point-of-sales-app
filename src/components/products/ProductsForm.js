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

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name, price
        }
        console.log('form data in prodform', formData)
        formSubmit(formData)
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

// import React from 'react'
// import { Formik, Form } from 'formik'
// import TextField from '../TextField'
// import * as yup from 'yup'

// const ProductsForm = (props) => {
//     const { formSubmit, name: prodName, price: prodPrice } = props
//     console.log('prod form',prodName,prodPrice)
//     const formValidate = yup.object({
//         name: yup.string()
//             .max(15, 'Must be 15 Charater or less')
//             .required('Product name is Required'),
//         price: yup.string()
//             .max(10, 'Must be 10 digits')
//             .required('price Required'),
//     })

//     return (
//         <Formik
//             initialValues={{
//                 name:prodName?prodName: "",
//                 price:prodPrice?prodPrice: ""
//             }}
//             validationSchema={formValidate}
//             onSubmit={(values, { formReset }) => {
//                 const resetForm = () => {
//                     formReset({
//                         name: "",
//                         price: ""
//                     })
//                 }
//                 formSubmit(values, resetForm)
//             }}

//         >
//             {
//                 formik => {
//                     <div className="d-inline">
//                         < Form className="form-horizontal" role="form" >
//                             <div className="form-group">
//                                 <div className="form-group row">
//                                     <div className="col-md-3 ">
//                                         <TextField label='enter name' name='name' type='text' />
//                                     </div>
//                                     <div className="col-md-3">
//                                         <TextField label='enter price' name='price' type='text' />
//                                     </div>
//                                     <div className="col-md-2">
//                                         <button className="btn btn-primary" type='submit'>Submit</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Form >
//                     </div >
//                 }
//             }
//         </Formik>
//     )
// }

// export default ProductsForm 

