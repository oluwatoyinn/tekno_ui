import {GET_AMBASSADOR,GET_ERRORS, GET_STARTLOADING,GET_STOPLOADING} from './types'
// import {startLoading, stopLoading} from '../reducers/AmbassadorReducer'
import {axiosClient} from '../utils/configs'
import axios from 'axios'

const url = "/api/ambassadors"


export const getAmbassador = () => async dispatch => {
    dispatch({type:GET_STARTLOADING})
    // const res = await axiosClient.get(url) 
    const res = await axios.get(`https://tkl-api.herokuapp.com/api/ambassadors`)
    dispatch({
      type: GET_AMBASSADOR,
      payload: res.data.data
    })
    dispatch({type:GET_STOPLOADING})
  }
  // .sort((a,b)=>a-b).reverse()

  export const postAmbassador = (data) =>  async dispatch => {
    try
    {
        await axiosClient.post(url,data)
        dispatch({
          type:GET_ERRORS,
        })
        dispatch(getAmbassador())
    }
    catch(err)
    {
      
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data.data
      })

    }
}