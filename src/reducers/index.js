import {combineReducers} from 'redux'
import AmbassadorReducer from '../reducers/AmbassadorReducer'
import GuarantorReducer from "../reducers/GuarantorReducer"
import authReducer from './authReducer'
import {reducer as ToastrReducer} from 'react-redux-toastr'

export default combineReducers({
    AmbassadorReducer,
    GuarantorReducer,
    authReducer,
    toastr:ToastrReducer
})