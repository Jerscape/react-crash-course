import classes from "./NewPost.module.css";
import { useState } from 'react'

function NewPost({onCancel, onAddPost}) {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData)
    onCancel()
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p></p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}> {/*remember classes here are css not react classes*/}
        <button type="button" onClick={onCancel}>Cancel</button>  {/*note, buttons will trigger a submit event and HTTP request by default. by setting the type to 'button' we can avoid this */}
        <button>Submit</button> 
      </p>
    </form>
  );
}

export default NewPost