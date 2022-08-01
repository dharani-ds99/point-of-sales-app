// import React from 'react'
// import {Formik,Form} from 'formik'
// import * as Yup from 'yup'
// import TextField from '../TextField'
// import "bootstrap/dist/css/bootstrap.css"

// const CustomerForm = (props) => {
//     const {formSubmit} = props

//     const formValidate = Yup.object({
//         name: Yup.string()
//             .max(15, 'Must be 15 Charater or less')
//             .required('user name is Required'),
//         mobile:Yup.string()
//             .max(10, 'Must be 10 digits')
//             .required('mobile is Required'),
//         email: Yup.string()
//             .email('Email is invalied')
//             .required('Email is Required')
        
//     })

//     const handleSubmit = (formData,formReset) => {
//         formSubmit(formData,formReset)
//     }
    

//     return (
//         <Formik
//             initialValues={{
//                 name:'',
//                 mobile:'',
//                 email:''
//             }}
//             validationSchema={formValidate}
//             onsubmit={(values,{resetForm}) => {
//                 const formReset = () => {
//                     resetForm({name:'',
//                     mobile:'',
//                     email:''})
//                 }
//                 handleSubmit(values,formReset)
//             }  
//             }
//         >
//             {formik => {
                
//                 <Form className='form'>
//                     <TextField type="text" label="name" name="name" />
//                     <TextField type="text" label="mobile" name="mobile" />
//                     <TextField type="email" label="email" name="email" />

//                     <button className='btn btn-primary m-2 ' type="submit">Add</button>
//                 </Form>
//             }}

//         </Formik>
//     )

// }

// export default CustomerForm

import React,{useState} from 'react'

const Form = (props) => {
    const {handleToggle,formSubmit,name:Custname,mobile:Custmob,email:Custemail} = props
    const [name,setName] = useState(Custname? Custname:'')
    const [mobile,setMobile] = useState(Custmob?Custmob:'')
    const [email,setEmail] = useState(Custemail?Custemail:'')
   


    const handleChange= (e) => {
        const inputValue= e.target.value 
        if(e.target.name === 'name'){
            setName(inputValue)
        }else if(e.target.name === 'mobile'){
            setMobile(inputValue)
        }else if(e.target.name === 'email'){
            setEmail(inputValue)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name,
            mobile,
            email
        }
        console.log('form data',formData)
        formSubmit(formData)
        setName('')
        setEmail('')
        setMobile('')
        handleToggle()
    }
    return (
        <div style={{borderRadius:'2%',margin:'30'}} >
            <form onSubmit={handleSubmit}>
                <input  type='text' value={name} onChange={handleChange} name="name" placeholder='enter name'/>
                <input  type="text" value={mobile} onChange={handleChange} name="mobile" placeholder='enter mobile mobile'/>
                <input  type="email" value={email} onChange={handleChange} name="email" placeholder='enter email'/>
                <button className='btn  m-2' style={{backgroundColor: '#17252A', color: '#3AAFA9'}}>Add</button>
            </form>
        </div>
    )
}

export default Form