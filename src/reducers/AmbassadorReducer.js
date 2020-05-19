import { GET_AMBASSADOR,GET_ERRORS,GET_ISLOADING, STOP_LOADING} from '../actions/types';

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

        case GET_ISLOADING:
            return{
                ...state,
                isLoading:true
            }
        
        case STOP_LOADING:
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
