import axios from "axios"
import { Post } from "../../types"
import { useEffect, useState } from "react"

type LikePostProps = {
  userId: string
  post: Post
}

const LikePost = ({ userId, post }: LikePostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  useEffect(() => {
    if (post.likers && userId) {
      setIsLiked(post.likers.includes(userId))
    }
  }, [post.likers, userId])

  const likePost = () => {
    axios.patch(`http://localhost:5000/post/like-post/${post._id}`, { userId })
    setIsLiked(true)
  }

  const dislikePost = () => {
    axios.patch(`http://localhost:5000/post/dislike-post/${post._id}`, {
      userId,
    })
    setIsLiked(false)
  }

  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {isLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  )
}

export default LikePost
