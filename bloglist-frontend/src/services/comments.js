




























import axios from 'axios'
const POSTURL = 'http://localhost:3003/'
const baseUrl = 'http://localhost:3003/api/comments/'



// POST request for making comment in database
const create = async (comment, id) => {

    console.log('in axios comment POST req')
    console.log('comment in POST req and id', comment, id)
  
    // object
    const object = {
        comment: comment,
        blogId: id
    }

    const response = await axios.post(POSTURL + id, object)
    return response.data
  }
  


const getById = (id) => {

  // blog id 
  console.log('get comments from this blog', id)

  const request = axios.get(baseUrl + id)
  return request.then(response => response.data)
}
  
const getAllComments = () => {

  const request = axios.get(baseUrl)

  return request.then(response => response.data)

}


// eslint-disable-next-line import/no-anonymous-default-export
export default { create, getById, getAllComments }






