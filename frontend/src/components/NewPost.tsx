import axios from "axios"
import { useState } from "react"
import { selectUser, useAppDispatch, useAppSelector } from "../store/selectors"
import { createPost } from "../store/postSlice"

const NewPost = () => {
  const [message, setMessage] = useState("")
  const userId = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios
      .post("http://localhost:5000/posts/", {
        message,
        author: userId,
      })
      .then((res) => dispatch(createPost(res.data)))
    setMessage("") //reset form input
  }

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        placeholder="Quoi de neuf ?!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  )
}

export default NewPost
