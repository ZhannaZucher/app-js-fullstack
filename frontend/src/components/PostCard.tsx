import { useEffect, useState } from "react"
import { Post } from "../../types"
import LikePost from "./LikePost"
import axios from "axios"
import DeletePost from "./DeletePost"

type PostCardProps = {
  userId: string
  post: Post
}
const PostCard = ({ userId, post }: PostCardProps) => {
  const [isAuthor, setIsAuthor] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true)
    } else {
      setIsAuthor(false)
    }
  }, [userId, post.author])

  const handleEdit = () => {
    if (newMessage) {
      axios.put(`http://localhost:5000/post/${post._id}`, {
        message: newMessage,
        author: userId,
      })
    }
  }

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
      {isEditing ? (
        <div className="edit-container">
          <textarea
            defaultValue={post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              setIsEditing(false)
              handleEdit()
            }}
          >
            Valider
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}
      <div className="icons-part">
        <LikePost post={post} userId={userId} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span id="update-btn" onClick={() => setIsEditing(!isEditing)}>
              &#10000;
            </span>
            <DeletePost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCard
