const initialBillsState = {
    data:[],error:{},loading:true
}

export const BillsReducer = (state=initialBillsState,action) => {
    switch(action.type){
        case 'ADD_BILL':{
            return {...state,data:[...state.data,{...action.payload}]}
        }
        case 'GET_ALL_BILLS': {
            return {...state,data:[...action.payload]}
        }
        case 'DELETE_BILL':{
            return {...state,data:[...state.data.filter(ele => {return ele._id !== action.payload})]}
        }
        default:{
            return {...state}
        }
    }
}