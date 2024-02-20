import axios from "axios"
import { useEffect, useState } from "react"
import { Post } from "../../types"
import PostCard from "./PostCard"

const Thread = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => setPosts(res.data))
  }, [])

  return (
    <div className="thread-container">
      {posts
        ?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
    </div>
  )
}

export default Thread
