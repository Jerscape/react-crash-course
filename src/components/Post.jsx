import classes from './Post.module.css' // note, styles could be classes (or I suspecdt anything)

function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;
