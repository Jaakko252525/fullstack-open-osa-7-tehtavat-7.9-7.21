




















import {
    // ...
  
    useParams
  } from 'react-router-dom'
  

const BlogForSingleBlog = ({ blogs }) => {
  

  const id = useParams().id
  console.log('param id', id)
  const blog = blogs.find(n => n.id === Number(id))

  console.log('thhhi blog', blogs)

  return (
    <div>
      {blog.title} {blog.author}
      {blog.url} Likes {blog.likes}
    </div>
  )
  }


export default BlogForSingleBlog

