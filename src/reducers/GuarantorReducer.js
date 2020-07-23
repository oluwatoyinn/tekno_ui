import {GET_GUARANTOR, GET_STARTLOADING, GET_STOPLOADING} from "../actions/types"

const initialState ={
    guarantors:[],
    isLoading:false
}

export default function (state=initialState, action)
{
    switch(action.type){
        case GET_GUARANTOR:
            return{
                ...state,
                guarantors:action.payload
            }
        
        case GET_STARTLOADING:
            return{
                ...state,
                isLoading:true
            }
        
        case GET_STOPLOADING:
        return{
            ...state,
            isLoading:false
        }
        default:
            return state;
    }
}