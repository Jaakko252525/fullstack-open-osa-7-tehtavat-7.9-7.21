



import axios from 'axios'



const baseUrl = '/api/login'


const login = async credentials => {
  console.log('credentials', credentials)
  const response = await axios.post(baseUrl, credentials)
  console.log('response:', response)

  
  // putting response data to redux store
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login }
















