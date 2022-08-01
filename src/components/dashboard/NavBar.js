import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PrivateRoute from '../../helpers/PrivateRoute'
import Home from './Home'
import Register from './Register'
import LogIn from './LogIn'
import User from './User'
import CustomerContainer from '../cutomers/CustomerContainer'
import ProductsContainer from '../products/ProductsContainer'
import BillsContainer from '../billing/BillsContainer'
import { logoutUser } from '../../actions/userAction'
import { startgetUserInfo } from '../../actions/userAction'
import { startGetAllCustomers } from '../../actions/customerAction'
import { startGetAllProducts } from '../../actions/productAction'
import { startGetAllBills } from '../../actions/billAction'
import BillDetails from '../billing/BillDetails'

const NavBar = (props) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const dispatch = useDispatch()

    const handleAuth = () => {
        setUserLoggedIn(!userLoggedIn)
    }

    useEffect(() => {
        //console.log('User loggin',userLoggedIn)
        if (localStorage.getItem('token')) {
            dispatch(startgetUserInfo())
            dispatch(startGetAllCustomers())
            dispatch(startGetAllProducts())
            dispatch(startGetAllBills())
            handleAuth()
        }
    }, [])

    return (<div>
        <div className="  rounded p-3 mt-4 mb-4 sticky-top " style={{ backgroundColor: '#1F2833' }}>
            <Link className="text-decoration-none " to='/'><button className="d-inline ml-3 btn btn-outline-dark pb-0"><h4 style={{ color: '#66FCF1' }}>Home</h4></button></Link>
            {
                userLoggedIn ? (
                    // if user logged in
                    <>
                        <Link className="text-decoration-none " to='/customers'><button className="d-inline ml-3 btn btn-outline-dark pb-0" ><h4 style={{ color: '#66FCF1' }}> Customers</h4></button></Link>
                        <Link className="text-decoration-none " to='/products'><button className="d-inline ml-3 btn btn-outline-dark pb-0"><h4 style={{ color: '#66FCF1' }}>Products</h4></button></Link>
                        <Link className="text-decoration-none " to='/bills'><button className="d-inline ml-3 btn btn-outline-dark pb-0"><h4 style={{ color: '#66FCF1' }}>Bills</h4></button></Link>
                        <div className="d-inline" style={{ float: 'right'}}>
                            <Link className='text-decoration-none' to='/users'><button className="d-inline ml-3 btn btn-outline-dark pb-0"><h4 style={{ color: '#66FCF1' }}>User</h4></button></Link>
                            <Link className='text-decoration-none' to='/'><button className="d-inline btn btn-outline-dark pb-0" onClick={() => {
                                dispatch(logoutUser())
                                handleAuth()
                                // alert("Sucessfully Logged out")
                            }}><h4 style={{ color: '#66FCF1' }}>Logout</h4></button></Link>

                        </div>
                    </>

                ) : (
                    // else user not logged in
                    <div className="d-inline" style={{ float: 'right' }}>
                        <Link className='text-decoration-none' to='/register'><button className="d-inline btn btn-outline-dark pb-0" ><h4 className="d-inline" style={{ color: '#66FCF1' }}>Register</h4></button></Link>
                        <Link className='text-decoration-none' to='/login'><button className="d-inline btn btn-outline-dark pb-0" ><h4 className="d-inline" style={{ color: '#66FCF1' }}>LogIn</h4></button></Link>
                    </div>

                )
            }
        </div>


        <Route path='/' component={Home} exact={true} />
        <PrivateRoute path='/customers' component={CustomerContainer} exact={true} />
        <PrivateRoute path='/products' component={ProductsContainer} exact={true} />
        <PrivateRoute path='/bills' component={BillsContainer} exact={true} />
        <Route path='/register' component={Register} exact={true} />
        <Route path='/login' render={(props) => {
            return <LogIn
                {...props}
                handleAuth={handleAuth}
            />

        }} exact={true} />
        <PrivateRoute path='/users' component={User} exact={true} />
        <PrivateRoute path='/bills/:_id' exact={true} component={BillDetails} />
    </div>
    )
}

export default NavBar