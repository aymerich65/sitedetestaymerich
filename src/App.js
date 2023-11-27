import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth, logOut } from "./firebase"

export default function Home(){

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
 
    useEffect(() => {
      if (loading) return
      if (!user) return navigate("/")
    },[user, loading])

    return (
      <div>
            <h2>Connecté avec le mail :</h2>
            <span>{user?.email}</span>
            <button onClick={logOut}>Déconnexion</button>
       </div>
    )   
}