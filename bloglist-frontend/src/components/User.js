






























const User = ({userProp}) => {


    const user = userProp

    if (!user) {
        return null
      }

    console.log('userProp', JSON.stringify(userProp))
    return (
    <div>
      {userProp.username} Blogs {userProp.blogs.length}
    </div>  
)}
  
  export default User
  
  
  
  