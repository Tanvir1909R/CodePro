import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../contexts/UserContext'

const Register = () => {
  const { createUser, updateUser } = useContext(authContext);
  const navigate = useNavigate()

  const updatePro = (name, url)=>{
    const info = {
      displayName: name,
      photoURL: url
    }
    updateUser(info)
    .catch(e => console.log(e.message))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(res =>{
      updatePro(name, url);
      navigate('/')
    })
    .catch(e => console.log(e.message))
  }

  return (
    <section>
      <div className="container">
        <div className="loginWrapper">
          <form onSubmit={handleSubmit}>
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