import {LOGIN_SUCCESS,
        LOGOUT, 
        GET_STARTLOADING,
        GET_STOPLOADING,
        REGISTER_SUCCESS} from '../actions/types'

const initialState = {
    token:localStorage.getItem('jwt_token'),
    isAuthenticated:false,
    user:null,
    isLoading:false,
    showPassword:false
}


const checkTokenExist = (payload) => {
    if(payload){
        return true
    } else {
        return false
    }
}

export default function(state=initialState,action){
    const {payload,type} = action
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated:checkTokenExist(payload),
                isLoading:true
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
        case REGISTER_SUCCESS:
            return {
                ...state,
                user:payload,
                isLoading:false,
                showPassword:false

            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,   
            };
        default:
            return state
            
    }
}