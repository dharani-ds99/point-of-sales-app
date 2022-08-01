const initialProductState = {data:[],errors:{},loading:true}

export const ProductReducer = (state=initialProductState,action) => {
    switch (action.type){
        case 'ADD_PRODUCT':{
            return {...state,data:[...state.data,{...action.payload}]}
        }
        case 'GET_PRODUCT':{
            return {...state,data:[...action.payload]}
        }
        case 'EDIT_PRODUCT':{
            return {...state,data:state.data.map(ele => 
                {if(ele.id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }

            })}
        }
        case 'DELETE_PRODUCT':{
            return {...state,data:state.data.filter(ele => {return ele._id !== action.payload})
            }
        }
        default: return {...state}
    }
}