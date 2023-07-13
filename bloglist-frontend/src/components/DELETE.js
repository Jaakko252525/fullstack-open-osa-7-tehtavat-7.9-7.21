



import blogService from '../services/blogs'

const DELETE = ({blogProp}) => {
    console.log('in component DELETE')
    console.log('this is the blog:', blogProp)

    // making blog object
    const blogObject = {
        "title": blogProp.title,
        "author": blogProp.author,
        "url": blogProp.url,
        "likes": blogProp.likes,
        "id": blogProp.id
    }

    console.log('this is blogObject in DELETE component', blogObject)
    return (
        <div>
            <button type="button" class="btn btn-info" onClick={() => blogService.eraseBlog(blogObject)}>DELETE</button>
        </div>

    )
}


export default DELETE









