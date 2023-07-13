






















const commentsRouter = require('express').Router()


// importing User model
const User = require('../models/user')

// importing model
const Blog = require('../models/blog');

// importing comment model

const Comment = require('../models/comment')


// ERROR handler
const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name ===  'JsonWebTokenError') {
    return response.status(400).json({ error: 'token missing or invalid' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired'
    })
  }

  next(error)
}



commentsRouter.post('/:id', async(request, response, next) => {
  const body = request.body;
  console.log('this is body in comment model:', body)
 
  const blog = await Blog.findById(body.blogId)




  const comment = new Comment({
    comment: body.comment,
    blog: blog._id
  });


  const savedComment = await comment.save()
  blog.comments = blog.comments.concat(savedComment._id)
  await blog.save()

  response.json(savedComment)


  
});



commentsRouter.get('api/comments/:id', (request, response, next) => {


    console.log('GET request came for comments')
    console.log('this is the blogs id that is commented', request.param.id)

    Blog.findById(request.params.id)
    .then(blog => {
      if (blog) {
        response.json(blog.comments);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});




commentsRouter.get('/api/comments', async (request, response) => {

  // find users blogs somehow
  //
  try {
    const comments = await Comment.find({});
    if (comments.length === 0) {
      // If no users found, return empty array with 200 status code
      response.status(200).json([]);
    } else {
      response.json(comments);
    }
  } catch (error) {
    // Handle the error
    response.status(500).json({ error: 'Server error' });
  }
});


module.exports = {
    commentsRouter
}


























