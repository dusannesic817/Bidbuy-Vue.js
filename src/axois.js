import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getCsrfToken = async () => {
  await axios.get('/sanctum/csrf-cookie', {
    withCredentials: true
  })
}

export default api