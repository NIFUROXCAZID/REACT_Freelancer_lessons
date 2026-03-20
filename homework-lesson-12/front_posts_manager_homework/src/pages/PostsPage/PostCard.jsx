import styles from './PostCard.module.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "@/store/slices/postsThunk";
// dispatch(addPost(data)).then(() => {
//   dispatch(fetchPosts(meta));
// });

function PostCard({ post }) {
  const { meta } = useSelector((state) => state.posts);
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id)).then(() => {
      dispatch(fetchPosts(meta));
    });
  };

  return (
    <div className={styles.postCard}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <div className={styles.postBody}>{post.body}</div>
      <div className={styles.cardFooter}>
        <div className={styles.actions}>
          <div className={styles.likeBtn}>👍 {post.likesNumber}</div>
          <div className={styles.dislikeBtn}>👎 {post.dislikesNumber}</div>
        </div>
        <div className={styles.author}>{post.authorId}</div>
      </div>
      <button onClick={() => dispatch(handleDelete)}>Delete</button>
    </div>
  );
}

export default PostCard
