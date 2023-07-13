import axios from 'axios'
const baseUrl = '/api/blogs'
const POSTURL = 'http://localhost:3003/'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const create = async (newObject, jwt) => {
  const config = {
    headers: { Authorization: 'Bearer' + jwt },
  }
  console.log('jwt is:', jwt)
  console.log('in axios POST req')
  console.log('blog in POST req', newObject)

  const response = await axios.post(POSTURL, newObject, config)
  return response.data
}


const put = async newObject => {
  const config = {
    headers: {Authorization: token}
  }
  console.log('in axios PUT request')
  console.log('this is newObject in PUT:', newObject)


  const response = await axios.put(POSTURL + newObject.id, newObject, config)
  return response.data
}


const eraseBlog = async newObject => {
  const config = {
    headers: {Authorization: token}
  }
  console.log('Axios delete')
  console.log('deleting', newObject)

  const response = await axios.delete(POSTURL + newObject.id, newObject, config)
  return response.data
}





// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, create, put, eraseBlog }