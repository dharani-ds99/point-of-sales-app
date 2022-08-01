import React,{useState} from 'react'
import {Formik,Form} from 'formik'
import { useDispatch } from "react-redux"
import { startRegisterUser } from '../../actions/userAction'
import { TextField } from './TextField'
import * as Yup from 'yup'
import "bootstrap/dist/css/bootstrap.css"

const Register = (props) => {
    const [error,setError] = useState('')
    const dispatch=useDispatch()

    // form validation using yup
    const formValidate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 Charater or less')
            .required('user name is Required'),
        email: Yup.string()
            .email('Email is invalied')
            .required('Email is Required'),
        password: Yup.string()
            .min(8, 'Must be 8 Charater or more')
            .required('Password is Required'),
        businessName: Yup.string()
            .max(15, 'Must be 15 Charater or less'),
        address: Yup.string()
            .max(30, 'Must be 30 Charater or less')
    })

    const redirectToLogin = () => {
        props.history.push('/login')
    }
    //server error handler
    const handleError=(error)=>{
        //console.log(error)
        setError(error)
    }
    //register action generator
    const formSubmit = (formData) => {
        dispatch(startRegisterUser(formData, redirectToLogin,handleError))
    }


    return (
        <Formik
            initialValues={{
                username:'',
                email:'',
                password:'',
                businessName:'',
                address:''
            }}
            validationSchema={formValidate} 
            onSubmit = { values => {
                //console.log('form data' , values)
                formSubmit(values)
            }}
        >
            {formik => (
                <div>
                    <center>
                        <h1 className='my-4 font-weight-bold-display-4'> Register Here</h1>
                        {/* registration form*/}
                        <Form className='form'>
                            <TextField type="text" label="User Name" name="username" />
                            <TextField type="email" label="developer@gmail.com" name="email" />
                            <TextField type="password" label="Password" name="password" />
                            <TextField type="text" label="Business Name" name="businessName" />
                            <TextField type="text" label="Address" name="address" />
                            {error && <span style={{color:'red'}}>{error}</span>}

                            <button className='btn btn-primary m-2 ' type="submit">Register</button>
                            <button className='btn btn-danger' type="reset" onClick={() => {
                                handleError('')
                            }}>Cancel</button>
                        </Form>
                    </center>
                </div>
                
            )
            }
        </Formik>
    )
}

export default Register