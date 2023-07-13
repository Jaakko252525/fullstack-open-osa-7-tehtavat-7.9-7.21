
import blogService from '../services/blogs'

const Like = ({blogProp, userProp}) => {
    console.log('in component Like')
    console.log('this is the blog:', blogProp)

    console.log('Liked user', userProp)

    // making blog object
    const blogObject = {
        "title": blogProp.title,
        "author": blogProp.author,
        "url": blogProp.url,
        "likes": blogProp.likes + 1,
        "id": blogProp.id,
        "user": userProp
    }

    console.log('this is blogObject in Like component', blogObject)
    return (
        <div>
            <button type="button" class="btn btn-warning" onClick={() => blogService.put(blogObject)}>Like</button>
        </div>

    )
}


export default Like





