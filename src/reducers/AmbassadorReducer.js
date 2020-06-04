import { GET_AMBASSADOR,GET_ERRORS,GET_STARTLOADING, GET_STOPLOADING} from '../actions/types';

const initialState = {

    ambassadors:[],
    isLoading:false,
    errors:[],
    user:{}

}

export default function(state= initialState,action)
{
    switch (action.type){
        case GET_AMBASSADOR:
            return {
            ...state,
            ambassadors:action.payload
             
            }
        case GET_ERRORS:
            return {

            ...state,
            errors:action.payload   
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

// export const startLoading =(state)=>{
//     return{
//         type:GET_ISLOADING,
//         ...state,
//         isLoading:true
//     }
// }

// export const stopLoading =(state)=>{
//     return{
//         type:STOP_LOADING,
//         ...state,
//         isLoading:false
//     }
// }
