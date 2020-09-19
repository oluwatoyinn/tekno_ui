import {GET_EMPLOYEES,POST_EMPLOYEES} from "./types"
import axios from "axios"
// import {axiosClient} from "../utils/configs"

const url= 'https://tkl-api.herokuapp.com/api/employees'
// const empURL ='/api/employees'

export const getEmployee =()=>async dispatch=>{
        const res = await axios.get(url)
        dispatch({
        type:GET_EMPLOYEES,
        payload:res.data.data
    })      
}

// export const postEmployee=(data)=>async dispatch=>{
//     const config ={
//         headers:{
//             'content-Type':'application/json'
//         }
//     }
//     const res = await axios.post(`${url}`,data,config)
//     dispatch({
//         type:POST_EMPLOYEES,
//         payload:res.data.data
//     })
// }