


import User from './User'
// redux 
import { useDispatch  } from 'react-redux'

import { addUser } from '../sliceFolder/userSlice'
// Axios
import userService from '../services/users'
import blogService from '../services/blogs'


import { useState, useEffect } from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'
 
// component

const UsersInfoList = () => {

    // users state
    const [users, setUsers] = useState([])
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
    // GET req with axios 
    userService
    .getAllUsers()
    .then(users =>
      setUsers(users)
    )

    blogService
    .getAll()
    .then(b => 
      setBlogs(b) )



    }, [])

    console.log('users and blogs', users, blogs)

    //render name and blogs created
        return (
            <div class="container">
              <h1 class="col-sm-2">Users</h1>            
                <ul>
                {users.map(user =>
                    <div>
                      <li key={user.id}>
                      <Link to={`/users/${user.id}`}>{user.username} Blogs: {user.blogs.length}</Link>
                    </li>


                    </div>
                )}
        
              </ul>
              <h2>Blogs</h2>            
                <ul>
                {blogs.map(b =>
                    <div>
                      <li key={b.id}>
                        <Link to={`/blogs/${b.id}`}>{b.title} Author: {b.author}Likes: {b.likes}</Link>
                      </li>


                    </div>
                )}
        
              </ul>
            </div>
        )
    }



export default UsersInfoList




















