import {toast} from 'react-toastify'

export const successToast = () =>{
    toast.success("successfully registered",{
        className:'success-toast',
        // draggable:'true',
        position:toast.POSITION.TOP_RIGHT
    })
}

export const reactReduxToastrOptions=(position="top-right")=>{ 

    const options = {
         position:position
     }
 
     return options
 } 
 
 export const delay = (ms)=> new Promise(resolve=> setTimeout(resolve,ms))
