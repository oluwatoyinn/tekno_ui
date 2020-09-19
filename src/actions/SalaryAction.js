import {GET_SALARY} from './types'
import axios from 'axios'

const url= 'https://tkl-api.herokuapp.com/api/salaries'

export const getSalaries =()=>async dispatch=>{
    const res= await axios.get(url)
    dispatch({
        type:GET_SALARY,
        payload:res.data.data
    })
}