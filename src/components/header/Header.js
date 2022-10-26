import React, { useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import { AiOutlineBars } from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const nav = useRef(null)
  const handleNav = ()=>{
    nav.current.classList.toggle('navActive')
  }

  const handleLogOut = ()=>{
    logOut()
    .catch(e => console.log(e.message))
  }

  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <Link to="/">
              <span>Code.</span>Pro
            </Link>
          </div>
          <nav ref={nav}>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/courses/all">Courses</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
          <div className="profile">
            <div className="toggleProfile">
              {user ? (
                <>
                <div style={{marginRight:"20px", cursor:"pointer", fontSize:"1.2rem", display:"flex", alignItems:"center"}} onClick={handleLogOut}>
                  <BiLogOut />
                </div>
                <div className="profileImg" title={user.displayName}>
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
                </>
              ) : (
                <div className="login">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
            <div className="themeBtn">
              <div className="line">
                <div className="switch">G</div>
              </div>
            </div>
            <div className="bar" onClick={handleNav}>
              <AiOutlineBars />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
