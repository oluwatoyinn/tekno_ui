import {GET_CLIENT} from './types'
import axios from 'axios'

const url ="https://tkl-api.herokuapp.com/api/clients"

export const getClients =()=> async dispatch=>{
    const res =await axios.get(`${url}`)
    dispatch({
        type:GET_CLIENT,
        payload:res.data.data
    })
}