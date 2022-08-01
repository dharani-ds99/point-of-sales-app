import axios from '../components/config/axios'
import { startGetAllBills } from './billAction'
import { startGetAllCustomers } from './customerAction'
import { startGetAllProducts } from './productAction'
export const startRegisterUser = (formData, redirectToLogin, handleError) => {
    //console.log(formData)
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                const data = response.data
                console.log("register", data)
                if (data.hasOwnProperty('errors')) {
                    handleError(data.errors)
                }
                else {
                    redirectToLogin()
                }
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}
export const startLoginUser = (formData, redirectToHome, handleAuth, handleError) => {
    //console.log("login user",formData)
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    handleError(result.errors)
                }
                else {
                    localStorage.setItem('token', result.token)
                    redirectToHome()
                    handleAuth()
                    dispatch(startgetUserInfo())
                    dispatch(startGetAllCustomers())
                    dispatch(startGetAllProducts())
                    dispatch(startGetAllBills())
                    
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }
}
export const startgetUserInfo = () => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                const userinfo = response.data
                dispatch(getUserInfo(userinfo))
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}
export const getUserInfo = (userinfo) => {
    return {
        type: "SET_USER_INFO", payload: userinfo
    }
}