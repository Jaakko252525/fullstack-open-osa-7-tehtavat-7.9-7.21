












//importing url and port
const config = require('dotenv').config()


// importing mongoose
const mongoose = require('mongoose')


mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI


// connecting to mongodb database
console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })



// making schema
const commentSchema = mongoose.Schema({
    comment: String,
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    },
  })


// converting to json
commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

// exporting model
module.exports = mongoose.model('Comment', commentSchema);























