import axios from "axios"
import { useAppDispatch } from "../store/selectors"
import { deletePost } from "../store/postSlice"

type DeletePostProps = {
  postId: string
}

const DeletePost = ({ postId }: DeletePostProps) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/posts/${postId}`)
    dispatch(deletePost(postId))
  }
  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  )
}

export default DeletePost
