


// react routing
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";


const Blogs = ({blogs}) => (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog =>
          <li key={blog.id}>
  
            <Link to={`/blogs/${blog.id}`}>{blog.title} author: {blog.author} likes: {blog.likes}</Link>
            
          </li>
        )}
      </ul>
    </div>
  )



export default Blogs
