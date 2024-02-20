import axios from "axios"

type DeletePostProps = {
  postId: string
}

const DeletePost = ({ postId }: DeletePostProps) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/post/${postId}`)
  }
  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  )
}

export default DeletePost
