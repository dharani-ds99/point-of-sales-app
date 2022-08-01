import axios from '../components/config/axios'

export const startCreateACustomer = (formData,token) => {
    //console.log("cust action",formData,token)
    return (dispatch) => {
        axios.post("/customers",formData,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
        .then((response) => {
            const customer=response.data
            console.log("res customer",customer)
            dispatch(addCustomer(customer))
        })
        .catch(err => alert(err.message))
    }
    
}

export const startGetACustomer = (_id) => {
    return (dispatch) => {
        axios.get(`/customers/${_id}`,{
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }})
            .then((response) => {
                console.log(response.data)
            })
            .catch(err => { console.log(err.message)})
    }
}

export const startGetAllCustomers = () => {
    return (dispatch) => {
        axios.get("/customers",{
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result=response.data
            dispatch(getCustomer(result))
            
        })
    }
}

export const startUpdateaCustomer = (formData,_id) => {
    return (dispatch) => {
        axios.put(`/customers/${_id}`,formData,{
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result=response.data 
            //console.log('update res',result)
            dispatch(editCustomer(result))
        })
        .catch(err => console.log(err.message))
    }
}

export const startDeleteCustomer = (_id) => {
    console.log("delete",_id)
    return (dispatch) => {
        axios.delete(`/customers/${_id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            //console.log('delete res',response.data)
            const id=response.data._id
            dispatch(deleteCustomer(id))
        })
        .catch(err => console.log(err.message))
    }
}

export const addCustomer = (customerinfo) => {
    return {
        type:'ADD_CUSTOMER',payload:customerinfo
    }
} 

export const getCustomer = (customerInfo) => {
    return {
        type:'GET_CUSTOMER',payload:customerInfo
    }
}

export const editCustomer = (customerInfo) => {
    return {
        type:'EDIT_CUSTOMER',payload:customerInfo
    }
}

export const deleteCustomer = (id) => {
    return {
        type: 'DELETE_CUSTOMER',payload: id
    }
}