import axios from "axios"
import { useEffect } from "react"
// import { Post } from "../../types"
import PostCard from "./PostCard"
import { selectPosts, useAppDispatch, useAppSelector } from "../store/selectors"
import { getPosts } from "../store/postSlice"

const Thread = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  useEffect(() => {
    axios
      .get("http://localhost:5000/post/")
      .then((res) => dispatch(getPosts(res.data)))
  }, [dispatch])

  return (
    <div className="thread-container">
      {posts
        .slice()
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
    </div>
  )
}

export default Thread
