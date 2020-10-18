import {axiosClient} from '../utils/configs'
import * as type from './types'
import setAuthToken from '../utils/setAuthToken'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastr} from '../utils/ToastrConstant'
const url ="/api/login"

export const login = (data) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {
        dispatch({type:type.GET_STARTLOADING})
        const res = await axiosClient.post(url,data,config);
        const {access_token} = res.data
        localStorage.setItem("jwt_token",access_token)
        setAuthToken(access_token)
        // const decode_token = jwt_decode(access_token)
        // console.log(res)
        dispatch({
            type:type.LOGIN_SUCCESS,
            payload:access_token 
        })
        dispatch({type:type.GET_STOPLOADING})
    } catch (error) {
        console.log(error)
    }
}

export const register =(data,history) =>async dispatch =>{ 
    const url = "api/register"
    const config ={
        headers:{
            'content-Type':'application/json'
        }
    }
    try {
        dispatch({type:type.GET_STARTLOADING})
        const res = await axiosClient.post(url,data,config)
        dispatch({type:type.GET_STOPLOADING})
        dispatch({
            type:type.REGISTER_SUCCESS,
            payload:res.data 
        })
       history.push('/')
    //    toastr.success('Registration', `${res.data.message}`,reactReduxToastr("top-right"))
    } catch (error) {
        console.log(error) 
    } 
}

export const logout = ()=> dispatch => {
    localStorage.removeItem("jwt_token")
    setAuthToken(false)
    dispatch({
        type:type.LOGOUT
    })
}

