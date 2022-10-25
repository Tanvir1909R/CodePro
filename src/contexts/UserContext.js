import React, { createContext } from 'react'

export const authContext = createContext();

const UserContext = ({children}) => {
    const user = {
        name:'tanvir'
    }

    const userInfo = { user }
  return (
    <>
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </>
  )
}

export default UserContext