import PostCard from './PostCard'

function PostsList({ posts }) {
  return (
    <div>
      {posts.length === 0 ? (
        <div>Список порожній</div>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  )
}

export default PostsList
