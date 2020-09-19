import {combineReducers} from 'redux'
import AmbassadorReducer from '../reducers/AmbassadorReducer'
import GuarantorReducer from "../reducers/GuarantorReducer"
import authReducer from './authReducer'
import {reducer as ToastrReducer} from 'react-redux-toastr'
import EmployeeReducer from "../reducers/EmployeeReducer"
import ClientReducer from "../reducers/ClientReducer"
import SalaryReducer from "../reducers/SalaryReducer"

export default combineReducers({ 
    AmbassadorReducer,
    GuarantorReducer,
    EmployeeReducer,
    ClientReducer,
    authReducer,
    SalaryReducer,
    toastr:ToastrReducer
})