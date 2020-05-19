import {axiosClient} from './configs'


// const AmbassadorUrl = '/biodata'
const AmbassadorUrl = '/api/ambassadors'


export default {

    getAmbassador:()=>axiosClient.get(AmbassadorUrl),
    deleteAmbassador:()=>axiosClient.delete(AmbassadorUrl),
    postAmbassador:(data)=>axiosClient.post(AmbassadorUrl,data),
    putAmbassador:(data)=>axiosClient.put(AmbassadorUrl,data)

}

export const url ="http://127.0.0.1:8000/api/ambassadors"
