import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import CustomerReducer from '../reducers/customerReducer'
import { ProductReducer } from '../reducers/ProductReducer'
import { BillsReducer } from '../reducers/billsReducer'

const configureStore = () => {
    const store=createStore(combineReducers({
        users:userReducer,
        customers:CustomerReducer,
        products:ProductReducer,
        bills:BillsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore