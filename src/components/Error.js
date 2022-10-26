import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div 
    style={{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'

    }}>
        <h1>Page Not Found</h1>
        <Link to='/'>Go home</Link>
    </div>
  )
}

export default Error