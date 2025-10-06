import classes from "./NewPost.module.css";

function NewPost(props) {


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p></p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
      <p className={classes.actions}> {/*remember classes here are css not react classes*/}
        <button>Cancel</button>  {/*note, buttons will trigger a submit event and HTTP request by default */}
        <button>Submit</button> 
      </p>
    </form>
  );
}

export default NewPost