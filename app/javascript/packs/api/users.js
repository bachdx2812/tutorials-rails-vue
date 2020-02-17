import Axios from '../axios'
import qs from 'qs'

export default {
  getUsers(params = {}, format = 'json') {
    const paramsSerializer = params => qs.stringify(params, { arrayFormat: 'brackets' });

    return Axios.get(`/users.${format}`, {
      params,
      paramsSerializer
    })
  },
  createUser(params = {}, format = 'json') {
    return Axios.post(`/users.${format}`, params)
  },
  updateUser(id, params = {}, format = 'json') {
    return Axios.put(`/users/${id}.${format}`, params)
  },
}