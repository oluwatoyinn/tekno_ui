import {GET_AMBASSADOR,GET_ERRORS} from './types'
import {axiosClient} from '../utils/configs'

const url = "/biodata"


export const getAmbassador = () => async dispatch => {
    const res = await axiosClient.get(url)
    dispatch({
      type: GET_AMBASSADOR,
      payload: res.data.sort((a,b)=>a-b).reverse()
    });
  };
  
  

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