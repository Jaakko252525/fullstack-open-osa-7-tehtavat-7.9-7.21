





























import {
    // ...
  
    useParams
  } from 'react-router-dom'
  








  const UserUser = ({ users }) => {
  
    const id = useParams().id
    console.log('iddd', id)
    

    const user = users.find(n => n.id === Number(id))

    console.log('userssss and user', users.Array, 'and', user)


    return (
      <div>
        <h2>{user.username}</h2>
        <div>{user.blogs}</div>
      </div>
    )
  }




export default UserUser




