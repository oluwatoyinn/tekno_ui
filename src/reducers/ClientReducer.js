import {GET_CLIENT, POST_CLIENT,DELETE_CLIENT,UPDATE_CLIENT} from '../actions/types'

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
        case POST_CLIENT:
            return{
                ...state,
                clients:action.payload
            }

        case DELETE_CLIENT:
            return{
                ...state,
                clients:action.payload
            }
        
        case UPDATE_CLIENT:
            return{
                ...state,
                clients:action.payload
            }
    
        default:
            return state;
    }
}