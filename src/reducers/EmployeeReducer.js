import {GET_EMPLOYEES,POST_EMPLOYEES, DELETE_EMPLOYEES,UPDATE_EMPLOYEES} from "../actions/types"
// import { returnErrors } from "../actions/errorAction"

const initialState={
    employees:[],
    isLoading:false,
    errors:{}
}

export default function (state=initialState,action)
{
    switch(action.type){
        case GET_EMPLOYEES:
            return{
                ...state,
                employees:action.payload,
                isLoading:false,
                errors:{}
            }
        case POST_EMPLOYEES:
            return{
                ...state,
            employees:action.payload
            }
        case DELETE_EMPLOYEES:
            return{
                ...state,
                employees:action.payload
            }
        case UPDATE_EMPLOYEES:
            return{
                ...state,
                employees:action.payload
            }
        default:
            return state;
    }
}