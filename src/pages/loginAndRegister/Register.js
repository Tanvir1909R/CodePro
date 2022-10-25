import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <div className="container">
        <div className="loginWrapper">
          <form>
            <h1>Register Now </h1>
            <div className="inputFiled">
            <input type="text" placeholder="Enter full name" name="name" />
            <input type="text" placeholder="Photo url" name="url" />
              <input type="email" placeholder="Enter email" name="email" />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="submit">
              <button>Create an account</button>
              <p className="createAccount">
                Already have an account?
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register