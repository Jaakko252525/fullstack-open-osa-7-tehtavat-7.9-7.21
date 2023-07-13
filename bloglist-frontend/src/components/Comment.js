

















import commentService from '../services/comments'

import { useState, useEffect } from "react"

const Comment = ({blogIdProp}) => {

    // comments
    const [oldComments, setOldComments] = useState([])




    console.log('id in blogProp', blogIdProp)
    const [inputValue, setInputValue] = useState('');



    useEffect(() => {
      // getting all comments for specific blog
      
      commentService.getAllComments()
      .then(returnedBlog => {
        setOldComments(returnedBlog)

      })

      console.log('oldComments', oldComments, 'typeof', typeof oldComments)
    },[])




    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        // Here, you can perform any action with the entered value
        console.log('Entered value:', inputValue);

        // making POST req
        commentService.create(inputValue, blogIdProp)
        

        // Clearing the input after pressing Enter
        setInputValue('');






      }
    };
  




    return (
        <div>
      Comment<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <p>
        comments: 
      </p>
      </div>
    );
  }


export default Comment

























