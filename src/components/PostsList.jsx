import Post from "./Post";
import NewPost from './NewPost'
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList(){
  const [enteredBody, setEnteredBody] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value)
  }

  return(
    
    <>
    <NewPost onBodyChange={bodyChangeHandler} /> 
      <ul className={classes.posts}>
       <Post author="Maximillian" body={enteredBody} />
       <Post author="Manuel" body ="Check out the full course!"/>
     </ul>
      </>
  )
   

}

export default PostsList