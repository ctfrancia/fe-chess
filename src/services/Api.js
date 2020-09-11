import axios from 'axios'

const API = axios.create({
  baseURL: `http://localhost:4000/api`,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default API
