





















import { Link } from "react-router-dom"


const Users = ({users}) => (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user =>
          <li key={user.id}>
  
            <Link to={`/notes/${user.id}`}>{user.content}</Link>
          </li>
        )}
      </ul>
    </div>
  )




export default Users

