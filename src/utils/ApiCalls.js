import {axiosClient} from './configs'


// const AmbassadorUrl = '/biodata'
const AmbassadorUrl = '/biodata'


export default {

    getAmbassador:()=>axiosClient.get(AmbassadorUrl),
    deleteAmbassador:()=>axiosClient.delete(AmbassadorUrl),
    PostAmbassador:(data)=>axiosClient.post(AmbassadorUrl,data),
    putAmbassador:(data)=>axiosClient.put(AmbassadorUrl,data)

}
