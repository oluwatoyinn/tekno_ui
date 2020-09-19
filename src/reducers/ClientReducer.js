import {GET_CLIENT} from '../actions/types'

const initialState ={
    clients:[],
    isLoading:false
}

export default function (state=initialState, action)
{
    switch (action.type) {
        case GET_CLIENT:
            return{
                ...state,
                clients:action.payload,
                isLoading:false
            }
    
        default:
            return state;
    }
}