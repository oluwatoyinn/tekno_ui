import axios from 'axios'


const baseURL = "https://teknokleen-api.herokuapp.com"
// const localUrl ="http://127.0.0.1:8000"
// const host= "localhost"
// const port = 8000
// const port3 = 8000
// const port2 = 3001



// const baseURL = `${host}:${port}`

export const axiosClient = axios.create({
    baseURL:baseURL
    // localUrl:localUrl
})
