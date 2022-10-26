import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

    const createUser = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (info)=>{
      return updateProfile(auth.currentUser, info);
    }

    const logOut = ()=>{
      return signOut(auth)
    }

    const logIn = (email, password)=>{
      return signInWithEmailAndPassword(auth,email, password )
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

    const userInfo = { user,loading, providerLogin, createUser, updateUser, logOut, logIn }
  return (
    <>
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </>
  )
}

export default UserContext