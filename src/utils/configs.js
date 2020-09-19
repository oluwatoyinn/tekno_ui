import axios from 'axios'


// const baseURL = "https://teknokleen-api.herokuapp.com"
const baseURL = "https://tkl-api.herokuapp.com"

// const localURL ="http://127.0.0.1:8000"
// const host= "localhost"
// const port = 8000
// const port3 = 8000
// const port2 = 3001

// const baseURL = `${host}:${port}`
const httpTimeout = '50000'

export const axiosClient = axios.create({
    baseURL:baseURL,
    timeout:httpTimeout,
    headers: {
        "Content-Type": "application/json"
      }
    // localUrl:localUrl
})
