import Axios from 'axios'
import { api } from '@/config'

const axios = Axios.create({
  baseURL: `http://${api.domain}:${api.port}`,
  timeout: api.timeout,
  withCredentials: true
})

export default axios
