import {GET_CLIENT,POST_CLIENT,DELETE_CLIENT,UPDATE_CLIENT} from './types'
import {returnErrors} from './errorAction'
import axios from 'axios'

const url ="https://tkl-api.herokuapp.com/api/clients"

export const getClients =()=> async dispatch=>{
    const res =await axios.get(`${url}`)
    dispatch({
        type:GET_CLIENT,
        payload:res.data.data
    })
}


export const postClient =(data)=> dispatch=>{
    axios.post(`${url}`, data)
    .then(res=>
            ({
            type:POST_CLIENT,
            payload:res.data.data
        })
    )
    .catch(err=>
        dispatch(returnErrors(err.response.data, err.response.status))
        )
}

export const deleteClient =(id)=>dispatch=>{
    axios.delete(`${url}/${id}`)
    .then(res=>
        ({
            type:DELETE_CLIENT,
            payload:id
        })
    )
}

export const updateClient =(data)=>dispatch=>{
    axios.put(`${url}/${data.id}`, data)
    .then(res=>
        ({
            type:UPDATE_CLIENT,
            payload:res.data.data
        })    
    )
}