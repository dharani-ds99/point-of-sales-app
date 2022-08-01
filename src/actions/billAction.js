import axios from '../components/config/axios'
export const startCraeteBill = (formData, resetForm) => {
    return ((dispatch) => {
        axios.post('/bills', formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response) => {
            const result = response.data
            //console.log(result)
            if (result.hasOwnProperty('errors')) {
                console.log(result.error)
            } else {
                dispatch(addBill(result))
                resetForm()
            }
        })
        .catch(err => console.log(err.message))
    })
}

export const startGetAllBills = () => {
    return ((dispatch) => {
        axios.get('/bills',{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result=response.data 
            dispatch(getAllBills(result))
        })
        .catch(err => console.log(err.message))
    })
}

export const startDeleteBill = (_id) => {
    return ((dispatch) => {
        axios.delete(`/bills/${_id}`,{
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result=response.data._id
            //console.log('delete id',result)
            dispatch(deleteBill(result))
        })
        .catch(err => err.message)
    })
}

export const addBill = (data) => {
    return {
        type: 'ADD_BILL', payload: data
    }
}

export const getAllBills = (data) => {
    return {
        type:'GET_ALL_BILLS',payload:data
    }
}

export const deleteBill = (id) => {
    return {
        type:'DELETE_BILL',payload:id
    }
}