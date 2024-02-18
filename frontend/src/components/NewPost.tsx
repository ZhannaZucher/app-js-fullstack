import axios from "axios"
import { useState } from "react"

type NewPostProps = {
  userId: string
}

const NewPost = ({ userId }: NewPostProps) => {
  const [message, setMessage] = useState("")
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post("http://localhost:5000/post/", {
      message,
      author: userId,
    })
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
