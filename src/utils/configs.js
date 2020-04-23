import axios from 'axios'


const host = "http://127.0.0.1"
const port = 3000
// const port2 = 3001



const baseURL = `${host}:${port}`

export const axiosClient = axios.create({
    baseURL:baseURL
})
