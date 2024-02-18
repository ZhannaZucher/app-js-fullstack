import { Post } from "../../types"
import LikePost from "./LikePost"

type PostCardProps = {
  userId: string
  post: Post
}
const PostCard = ({ userId, post }: PostCardProps) => {
  const dateFormater = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  }
  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>posté le {dateFormater(post.createdAt)}</p>
      </div>
      <p>{post.message}</p>
      <div className="icons-part">
        <LikePost post={post} userId={userId} />
      </div>
    </div>
  )
}

export default PostCard
