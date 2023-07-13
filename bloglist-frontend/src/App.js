import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Footer from './components/Footer'

import AllUsers from './components/AllUsers'
import Comment from './components/Comment'
import BlogForSingleBlog from './components/BlogForSingleBlog'


// importing UsersBlogs
import UserBlogs from './components/UsersBlogs'

import Blogs from './components/BlogsLink'

import UserUser from './components/UserUser'


// react routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";



// services
import blogService from './services/blogs'
import loginService from './services/login'
import userService from './services/users'

import Togglable from './components/Togglable'
import Like from './components/Like'
import UsersInfoList from './components/UsersInfoList'


//importing >DELETE component
import DELETE from './components/DELETE'

import { addUser } from './sliceFolder/userSlice'
// redux shit
import { useDispatch, useSelector } from 'react-redux'
import { addBlogs } from './sliceFolder/blogsSlice'
import { logged } from './sliceFolder/userLoggedIn';

// BlogForm component

const BlogForm = ({handleSubmit,
  handleTitleChange, 
  handleAuthorChange, 
  handleURLChange, 
  handleIdChange, 
  newTitle, 
  newAuthor,
  newURL, 
  newId, errorMessage}) => {

    console.log('this is id:', newId)
    return (

      <div>
  <form onSubmit={handleSubmit}>
    Title<input
      value={newTitle}
      onChange={handleTitleChange}
    />
    Author<input
      value={newAuthor}
      onChange={handleAuthorChange}
    />
    URL<input
      value={newURL}
      onChange={handleURLChange}
    />
    <button type="submit">save</button>
    <Notification message={errorMessage} />
  
  </form>  
      </div>
    )


}








const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [username, setUsername] = useState('') 

  // id for specificUser page!!
  const [idForUser, setIdForUser] = useState('648348cab31f0bdfc0b7f082')

  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  // this needs to bee a redux store
  const [errorMessage, setErrorMessage] = useState('')

  // title, author, URL state
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor,setNewAuthor] = useState('')
  const [newURL, setNewURL] = useState('')
  const [newId, setNewId] = useState('')

  const [usersFromDB, setUsersFromDB] = useState('')

  // BlogForm visible state
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  // page state
  const [page, setPage] = useState('home')

  const dispatch = useDispatch()
  const blogsInRedux = useSelector((state) => state.blogs.value)
  const usersInRedux = useSelector((state) => state.user.value)
  const [lastBlogs, setLastBlogs] = useState([])

  const [jwt, setJWT] = useState('')

  useEffect(() => {
    blogService
    .getAll()
    .then(blogs =>
      setBlogs( blogs )
    )
    console.log('ssssssssssssssssssssssssssssssssssssssssssssssss')
  
    console.log('these are blogs ===', blogs)
    if (blogs != lastBlogs) {
    console.log('lastBlogs', lastBlogs)
    console.log('lastblogs', blogs)
    setLastBlogs(blogs)
    dispatch(addBlogs(blogs))


  }



  },[blogsInRedux])


  useEffect(() => {
    userService
    .getAllUsers()
    .then(users =>
      setUsersFromDB(users)
    )
    //console.log('users in heeer', JSON.stringify(usersFromDB))
    dispatch(addUser(usersFromDB))

  },[blogsInRedux])



    useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)

    }
  },)

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      setUser(user)
      
      setJWT(user.token)
      


      setUsername('')
      setPassword('')
    } catch (exception) {


      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }


  }



  const addBlog = (event) => {
    event.preventDefault()
    console.log('in addBlog function!')

    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newURL,
      likes: 0,
      userId: user.id
    }

    blogService
      .create(blogObject, jwt)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlog('')
      })
    setErrorMessage('Blog added succesfully!☺')
    // adding blog to redux store
    dispatch(addBlogs(blogObject))
  }


// handlers to set new state
const handleTitleChange = (event) => {
  setNewTitle(event.target.value)

}
const handleAuthorChange = (event) => {
  setNewAuthor(event.target.value)
}

const handleURLChange = (event) => {
  setNewURL(event.target.value)
}

const handleIdChange = (event) => {
  setNewId(event.target.value)
}



const blogsToShow = showAll
? blogs
: blogs.filter(blog => blog.important)

// window.localStorage.clear()
const clearStorage = () => {
  console.log('in here')
  window.localStorage.clear()
  console.log('Local storage cleared succesfully')
}


const loginForm = () =>
  {

  return(


  <div>
    <form class="form-label" onSubmit={handleLogin}>
      <div class="">
        username
          <input

          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div class="">
        password
          <input class=""
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button class="" type="submit">login</button>
    </form>
  </div>      
)
}



  const blogForm = () => {
    const hideWhenVisible = { display: blogFormVisible ? 'none' : '' }
    const showWhenVisible = { display: blogFormVisible ? '' : 'none' }

  
    return (
      <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setBlogFormVisible(true)}>Add blog</button>
        <button onClick={clearStorage()}>Log out</button>
      </div>

      <div style={showWhenVisible}>
        <BlogForm 
          handleSubmit={addBlog}
          handleAuthorChange={handleAuthorChange}
          handleTitleChange={handleTitleChange}
          handleURLChange={handleURLChange}
          handleIdChange={handleIdChange}
          newAuthor={newAuthor}
          newTitle={newTitle}
          newURL={newURL}
          newId={newId}
        />

        <button onClick={() => setBlogFormVisible(false)}>cancel</button>
      </div>

      </div>

    )}


 
    const callingUsersFromDB = () => {
      
      const usersArray = []

      userService
      .getAllUsers()
      .then(users => 
        usersArray.push(users))
        


        console.log('usersArray:', usersArray)
      return usersArray
    }
  
    return (
      <div>
      <Router>
        <div class="container">
          <Link class="col-sm-2" to="/home">Home </Link>
          <br/>
          <Link to="/users">Users </Link>
          <br/>
          <Link to="/login">Login </Link>
          <br/>          
          <Link to="/allUsersAndBlogs">All users and blogs </Link>
          <br/>
        </div>

      <Routes>
        <Route path="/users/:id" element={<UserUser users={callingUsersFromDB()} />} />
        <Route path="/users" element={<AllUsers/>} />
        <Route path="/login" element={
            <div>

            <h1>Blogs app</h1>
            <Notification message={errorMessage} />
            {!user && loginForm()} 
            {user && <div>
              <p>{user.name} logged in</p>
                {blogForm()}
              </div>
            } 
        
            <div>
              <button onClick={() => dispatch(addBlogs(blogs))} >Send blogs to redux store</button>
              <button onClick={() => setShowAll(!showAll)}>
                show {showAll}
              </button>
            </div> 
            <ul>
              <ul>
                {blogsToShow.map(blog =>
                  <Togglable buttonLabel="Show blog">
                    <Blog
                      key={blog.title}
                      blog={blog}
                    />
                    <Comment blogIdProp={blog.id}/>
                    <Like blogProp={blog} userProp={user}></Like>
                    <DELETE blogProp={blog}></DELETE>
                  </Togglable>
                )}
        
              </ul>
            </ul>
            <Footer />
          </div>
        } />
        <Route path="home" element={<h2>Blog-List app</h2>}/>
        <Route path="/blogs/:id" element={<BlogForSingleBlog blogs={blogs}/>}   />
        <Route path="/allUsersAndBlogs" element={<UsersInfoList/>}/>
        
      </Routes>

      </Router>
      
      <div>Just a rolling thing! ☺</div>
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>

  )}



export default App