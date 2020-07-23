import axios from 'axios'

export function LoginAction(data){
    return dispatch =>{
        return axios.post(`http://127.0.0.1:8000/api/login`, data)
    }
}