



import User from './User'
// redux 
import { useDispatch  } from 'react-redux'

import { addUser } from '../sliceFolder/userSlice'
// Axios
import userService from '../services/users'


import { useState, useEffect } from 'react'
 
// component

const AllUsers = () => {

    // users state
    const [users, setUsers] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
    // GET req with axios 
    userService
    .getAllUsers()
    .then(users =>
      setUsers(users)
    )

    // sending users to redux store
    dispatch(addUser())

    }, [])


    //render name and blogs created
        return (
            <div class="container">
              <div class="row">
                <h1>Users</h1>            
                  <ul class="col-sm-4">
                  {users.map(user =>
                      <div>
                        <li class="col-sm-3" key={user.id}>
                      <User
                        key={user.username}
                        userProp={user}
                      />
                      </li>
                      </div>
                  )}
          
                </ul>
              </div>
            </div>
        )
    }



export default AllUsers






































