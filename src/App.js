import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Faq from './pages/faq/Faq'
import Blog from './pages/Blog'


const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/courses' element={ <Courses/> } />
          <Route path='/faq' element={ <Faq/> } />
          <Route path='/blog' element={ <Blog /> } />
        </Routes>
      </main>
    </>
  )
}

export default App