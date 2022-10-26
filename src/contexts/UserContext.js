import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../firebase.config';

export const authContext = createContext();

const UserContext = ({children}) => { 
    const auth = getAuth(app)
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider)=>{
      setLoading(true)
      return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentAuth =>{
        setUser(currentAuth);
        setLoading(false)
      })
      return ()=>{
        unsubscribe()
      }
    },[auth])

    const userInfo = { user,loading, providerLogin }
  return (
    <>
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </>
  )
}

export default UserContext