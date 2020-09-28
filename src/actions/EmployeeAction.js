import {GET_EMPLOYEES,POST_EMPLOYEES,DELETE_EMPLOYEES, UPDATE_EMPLOYEES} from "./types"
import axios from "axios"
import {returnErrors} from "./errorAction"
// import {axiosClient} from "../utils/configs"

const url= 'https://tkl-api.herokuapp.com/api/employees'

// Get all employee
export const getEmployee =()=>async dispatch=>{
        const res = await axios.get(url)
        dispatch({
        type:GET_EMPLOYEES,
        payload:res.data.data
    })   
}

//Add a new employee
export const postEmployee =(data)=>dispatch=>{
    axios.post(`${url}`,data)
    .then(res=>
        ({
            type:POST_EMPLOYEES,
            payload:res.data.data
        })
    )
    .catch(err=>
        dispatch(returnErrors(err.response.data,err.response.status))  
    )
}

//UPDATE existing employee
export const updateEmployee =(data)=>dispatch=>{
    axios.put(`${url}/${data.id}`, data)
    .then(res=>
        ({
            type:UPDATE_EMPLOYEES,
            payload:res.data.data
        })    
    )
}

//Remove/Delete an employee
export const deleteEmployee= (id)=>dispatch=>{
    axios.delete(`${url}/${id}`)
    .then(res=>
       ({
            type:DELETE_EMPLOYEES,
            payload:id
        })
    )
    .catch(err=>console.log(err))
}

