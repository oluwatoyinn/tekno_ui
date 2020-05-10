import { GET_AMBASSADOR,GET_ERRORS} from '../actions/types';

const initialState = {

    ambassadors:[],
    id:'',
    ambassador:{},
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
            isLoading:true,
            ambassadors:action.payload
             
            }
        case GET_ERRORS:
            return {

            ...state,
            errors:action.payload
                
            }
    
        default:
            return state;
    }
}