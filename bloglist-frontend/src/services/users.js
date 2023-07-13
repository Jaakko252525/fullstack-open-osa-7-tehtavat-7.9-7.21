
import axios from 'axios'
const baseUrl = '/api/users'



const getAllUsers = () => {
  const request = axios.get(baseUrl)
  console.log('get all users')
  return request.then(response => response.data)
}


// get specific user with id
const getUserWithId = (id) => {


  const request = axios.get('/users/' + id)

  console.log('get specific user with id users')
  return request.then(response => response.data)

}



// exporting rest
export default { getAllUsers, getUserWithId }










