import {GET_AMBASSADOR,GET_ERRORS, GET_ISLOADING,STOP_LOADING} from './types'
// import {startLoading, stopLoading} from '../reducers/AmbassadorReducer'
import {axiosClient} from '../utils/configs'

const url = "/api/ambassadors"


export const getAmbassador = () => async dispatch => {
    dispatch({type:GET_ISLOADING})
    const res = await axiosClient.get(url)
    dispatch({
      type: GET_AMBASSADOR,
      payload: res.data.data
    })
    dispatch({type:STOP_LOADING})
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