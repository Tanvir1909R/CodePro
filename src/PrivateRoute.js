import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from './contexts/UserContext'

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext);

    if(!user){
        setTimeout(()=>{
            alert('please login to enter this page')
        },500)
        return <Navigate to='/login' />
    }
  return children
}

export default PrivateRoute