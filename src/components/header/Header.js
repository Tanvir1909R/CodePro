import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">
              <Link to='/'><span>Code.</span>Pro</Link>
            </div>
            <nav>
              <NavLink to='/' end>Home</NavLink>
              <NavLink to='/courses'>Courses</NavLink>
              <NavLink to='/faq'>FAQ</NavLink>
              <NavLink to='/blog'>Blog</NavLink>
            </nav>
            <div className="profile">
              <div className="toggleProfile">
              <div className="profileImg" title='luffy'>
                <img src="./img/luffy.png" alt="" />
              </div>
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