import axios from '../components/config/axios'

export const startCreateAProduct = (formData) => {
    console.log('create prod',formData)
    return (dispatch) => {
        axios.post('/products', formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                const result = response.data
                console.log('prod post',result)
                dispatch(addProduct(result))
            })
            .catch(err => alert(err.message))
    }

}

export const startGetAllProducts = () => {
    return (dispatch) => {
        axios.get('/products',{
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result=response.data 
            dispatch(getProduct(result))
        })
    }
}

export const startUpdateAProduct = (formData,_id) => {
    console.log('update',formData)
    return (dispatch) => {
        axios.put(`/products/${_id}`,formData,{
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result=response.data
            console.log('update res',result) 
            dispatch(editProduct(result))
        })
        .catch(err => console.log(err.message))
    }    
}

export const startDeleteProduct = (_id) => {
    return (dispatch) => {
        axios.delete(`/products/${_id}`,{
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const id=response.data._id
            dispatch(deleteProduct(id))
        })
        .catch(err => console.log(err.message))
    }
}

export const addProduct = (productinfo) => {
    return {
        type:'ADD_PRODUCT', payload:productinfo
    }
    
}

export const getProduct = (prodInfo) => {
    return {
        type:'GET_PRODUCT',payload:prodInfo
    }
}

export const editProduct = (prodInfo) => {
    return {
        type:'EDIT_PRODUCT',payload:prodInfo
    }
}

export const deleteProduct = (id) => {
    return {
        type:'DELETE_PRODUCT',payload:id
    }
}