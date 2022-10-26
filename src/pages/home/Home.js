import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="homeWrapper">
          <div className='heroText'>
          <h1>Learn Coding Online With Professional Instructors</h1>
          <Link to='/courses/all' >Get Started</Link>
          </div>
          <div className='heroImg'>
            <img src="./img/hero-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home