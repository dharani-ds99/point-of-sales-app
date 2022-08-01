const initialCustomerState = {
    data:[],errors:{},loading:true
}

const CustomerReducer = (state=initialCustomerState,action) => {
    switch(action.type){
        case 'ADD_CUSTOMER':{
            return {...state,data:[...state.data,{...action.payload}]}
        }
        case 'GET_CUSTOMER':{
            return {...state,data:[...action.payload]}
        }
        case 'EDIT_CUSTOMER':{
            return {...state,data:state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        case 'DELETE_CUSTOMER':{
            return {...state,data:state.data.filter(ele => {return ele._id !== action.payload})
            }
        }
        default:{
            return {...state}
        }
    }
}

export default CustomerReducer