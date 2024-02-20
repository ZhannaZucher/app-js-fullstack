import { useEffect, useState } from "react"
import NewPost from "./components/NewPost"
import Thread from "./components/Thread"
import { useAppDispatch } from "./store/selectors"
import { getUser } from "./store/userSlice"

const App = () => {
  const [userId, setUserId] = useState("")
  const dispatch = useAppDispatch()

  useEffect(() => {
    userId && dispatch(getUser(userId))
  }, [dispatch, userId])

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <NewPost />
      <Thread />
    </div>
  )
}

export default App
