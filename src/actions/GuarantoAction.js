import {GET_GUARANTOR} from "./types"

// import {axiosClient} from '../utils/configs'
import axios from 'axios'

// const url = "/api/ambassadors"
const url ="https://tkl-api.herokuapp.com/api/guarantors"

export const getGuarantor =()=> async dispatch =>{
    // dispatch({type:GET_STARTLOADING})
    const res = await axios.get(`${url}`)
    dispatch({
        type:GET_GUARANTOR,
        payload:res.data.data
    })
    // dispatch({type:GET_STOPLOADING})

}