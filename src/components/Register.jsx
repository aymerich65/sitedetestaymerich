
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { auth, registerUser } from "../firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)

    /*je créer la variable de navigation*/
    const navigate = useNavigate();


    const register = () => {
        registerUser(email, password)
      }



useEffect(()=>{
    if(loading){
        return;
    }
    if(user){
        navigate('/')
    }
},[user])

  return (
    <div >
        <div >
            <label>email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <label>password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button onClick={register}>Envoyer</button>
        </div>

<Link to="/">Accueil</Link> 

    </div>

  );
}

export default  Register;
