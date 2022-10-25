import React, { useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import { AiOutlineBars } from 'react-icons/ai'
import "./header.css";

const Header = () => {
  const { user } = useContext(authContext);
  const nav = useRef(null)
  console.log(user.name);
  const handleNav = ()=>{
    nav.current.classList.toggle('navActive')
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
              {/* {user ? (
                <div className="profileImg" title="luffy">
                  <img src="./img/luffy.png" alt="" />
                </div>
              ) : (
                <div className="login">
                  <Link to="/login">Login</Link>
                </div>
              )} */}
              <div className="login">
                  <Link to="/login">Login</Link>
                </div>
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
