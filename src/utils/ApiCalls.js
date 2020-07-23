import {axiosClient} from './configs'


// const AmbassadorUrl = '/biodata'
const AmbassadorUrl = '/api/ambassadors'


export default {

    getAmbassador:()=>axiosClient.get(AmbassadorUrl),
    deleteAmbassador:()=>axiosClient.delete(AmbassadorUrl),
    postAmbassador:(data)=>axiosClient.post(AmbassadorUrl,data),
    putAmbassador:(data)=>axiosClient.put(AmbassadorUrl,data)

}

// export const url ="https://teknokleen-api.herokuapp.com/api/ambassadors"
export const url="https://tkl-api.herokuapp.com/api/ambassadors"
export const regUrl ="http://127.0.0.1:8000"
// export const local_url ="http://127.0.0.1:8000/api/ambassadors"
