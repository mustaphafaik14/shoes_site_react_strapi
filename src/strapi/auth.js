import Axios from 'axios'

export const register = async (username, email, password) => {
  const response = await Axios.post('/auth/local/register', {
    username,
    email,
    password,
  }).catch((err) => err.response)
  return response
}

export const login = async (email, password) => {
  const response = await Axios.post('/auth/local', { identifier: email, password }).catch((err) => err.response)
  return response
}
