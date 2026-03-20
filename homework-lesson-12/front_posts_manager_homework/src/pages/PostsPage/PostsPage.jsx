import { useDispatch, useSelector } from 'react-redux'
import PostsList from './PostsList'
import { useEffect } from 'react'
import { fetchPosts } from '@/store/slices/postsThunk'
import PaginationBlock from './PaginationBlock'
import PostForm from "./PostForm";

function PostsPage() {
  const { posts, meta, loading, error } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts(meta))
    //eslint-disable-next-line
  }, [])

  const onPageSelect = (page) => {
    dispatch(
      fetchPosts({
        ...meta,
        page,
      })
    )
  }

  return (
    <div>
      <PostForm/>
      {!!posts && <PostsList posts={posts} />}
      {!!error && <div>{error}</div>}
      {loading && <div>Loading ...</div>}
      <PaginationBlock
        page={meta.page}
        totalPagesNumber={meta.totalPagesNumber}
        onPageSelect={onPageSelect}
      />
    </div>
  )
}

export default PostsPage
