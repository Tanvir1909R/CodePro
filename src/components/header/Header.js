import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">Code.Pro</div>
            <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/courses'>Courses</NavLink>
              <NavLink to='/faq'>FAQ</NavLink>
              <NavLink to='/blog'>Blog</NavLink>
            </nav>
            <div className="profile">
              <div className="profileImg">
                <img src="" alt="" />
              </div>
              <div className="themeBtn">
                  <div className="line">
                    <div className="switch">G</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header