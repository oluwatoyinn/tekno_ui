import { GET_AMBASSADOR,GET_ERRORS,GET_ISLOADING} from '../actions/types';

const initialState = {

    ambassadors:[],
    id:'',
    ambassador:{},
    isLoading:true,
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
                isLoading:false
            }
    
        default:
            return state;
    }
}