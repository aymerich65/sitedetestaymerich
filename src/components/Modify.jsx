import { auth, resetPassword } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Modify(){

const [email, setEmail]= useState('');
const [user, err] = useAuthState(auth);

    /*je créer la variable de navigation*/
    const navigate = useNavigate();

    useEffect(()=>{

        if(user){
            navigate('/')
        }
    },[user])


    return(
        <div >
        <label>email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <button onClick={() => resetPassword(email)}>Envoyer</button>

    </div>

    )

}