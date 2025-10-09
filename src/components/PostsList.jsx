import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAddPost={addPostHandler}
            onCancel={
              onStopPosting
            } /* we can reuse the onStopPosting prop/function here beause closing the modal is what we want when the cancel button is selected */
          />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />

          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{texAlign: 'center', color: 'white' }}>There are no posts yet</div>
      )}
    </>
  );
}

export default PostsList;
