import React,{useState} from 'react'
import {Formik,Form} from 'formik'
import { TextField } from './TextField'
import { useDispatch } from 'react-redux'
import { startLoginUser } from '../../actions/userAction'
import * as Yup from 'yup'
import "bootstrap/dist/css/bootstrap.css"

const LogIn = (props) => {

    const [error,setError] = useState('')
    const {handleAuth} = props

    //login form validation using yup
    const formValidate = Yup.object({
        email: Yup.string()
            .email('Email is invalied')
            .required('Email is Required'),
        password: Yup.string()
            .min(8, 'Must be 8 Charater or more')
            .required('Password is Required')
    })

    const dispatch=useDispatch()

    const redirectToHome = () => {
        props.history.push('/')
    }
    //server error handler
    const handleError = (error) => {
        setError(error)
    }
    //login action generator
    const formSubmit = (formData) => {
        dispatch(startLoginUser(formData,redirectToHome,handleError,handleAuth))
    }


    return (
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
            validationSchema={formValidate} 
            onSubmit = { values => {
                //console.log('form data in login' , values)
                formSubmit(values)
            }}
        >
            {formik => (
                <div>
                    <center>
                        <h1 className='my-4 font-weight-bold-display-4'> LogIn Here</h1>
                        {/* display login form*/}
                        <Form className='form'>
                            
                            <TextField type="email" label="developer@gmail.com" name="email" />
                            <TextField type="password" label="Password" name="password" />
                            {error && <span style={{color:'red'}}>{error}</span>}<br/>
                            

                            <button className='btn btn-primary m-2 ' type="submit">Login</button>
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

export default LogIn