






















import Blog from './Blog'
import { useState } from 'react'
import userService from '../services/users'



const UsersBlogs = ({id}) => {

    // blogs state
    const [blogs, setBlogs] = useState([])


  console.log('id in UsersBlogs', id)

  if (blogs.length < 1) {
    userService.getUserWithId(id)
    .then(blogs => 
    setBlogs(blogs)
    )



    console.log('blos typeof', typeof blogs, 'and blogs', blogs)

  // if user correct then return data
  return (
    <div>
        <p>siiiiiiiiiiiiiiii</p>            
    <ul>
    {blogs.map(blog =>
        <div>
        <Blog
          key={blog.title}
          blog={blog}
        />

        </div>
    )}

  </ul>
</div>
  )  
  
}
}


export default UsersBlogs


















