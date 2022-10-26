import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import "./common.css";
import { authContext } from "../../contexts/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { providerLogin } = useContext(authContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()
  const handleGoogleLogin = ()=>{
    providerLogin(googleProvider)
    .then(res => console.log(res.user))
    .catch(e => console.log(e.message))
  }
  const handleGithubLogin = ()=>{
    providerLogin(githubProvider)
    .then(res => console.log(res.user))
    .catch(e => console.log(e.message))
  }
  return (
    <section>
      <div className="container">
        <div className="loginWrapper">
          <form>
            <h1>Login</h1>
            <div className="inputFiled">
              <input type="email" placeholder="Enter email" name="email" />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="submit">
              <p>Forgot Password</p>
              <button>Login</button>
              <p className="createAccount">
                Don't have an account?
                <Link to="/register">Create an account</Link>{" "}
              </p>
            </div>
          </form>
          <div className="other">
            <div className="or">
              <div className="line"></div>
              or
              <div className="line"></div>
            </div>
            <div className="otherLogin">
              <div className="types" onClick={handleGoogleLogin}>
                <div className="typeImg">
                    <FcGoogle />
                </div>
                <div className="typeText">
                    Continue With Google 
                </div>
              </div>
              <div className="types" onClick={handleGithubLogin}>
                <div className="typeImg">
                <BsGithub />
                </div>
                <div className="typeText">
                    Continue With Github 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
