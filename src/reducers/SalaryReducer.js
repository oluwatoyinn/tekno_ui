import {GET_SALARY} from "../actions/types"

const initialState={
    salaries:[],
    isLoading:false
}

export default function (state=initialState, action)
{
    switch (action.type) {
        case GET_SALARY:
            return{
                ...state,
                salaries:action.payload,
                isLoading:false
            }
        default:
            return state
    }
}