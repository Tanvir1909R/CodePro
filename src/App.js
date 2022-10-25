import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Faq from './pages/faq/Faq'
import Blog from './pages/Blog'
import Login from './pages/loginAndRegister/Login'
import Register from './pages/loginAndRegister/Register'
import Allcourses from './components/allcourses/Allcourses'
import FrontEnd from './pages/FrontEnd'
import BackEnd from './pages/BackEnd'
import FullStack from './pages/FullStack'
import AppDev from './pages/AppDev'
import GameDev from './pages/GameDev'


const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/courses' element={ <Courses/> }>
              <Route path='all' element={ <Allcourses/> } />
              <Route path='front-end' element={ <FrontEnd/> } />
              <Route path='back-end' element={ <BackEnd/> } />
              <Route path='full-stack' element={ <FullStack/> } />
              <Route path='app-development' element={ <AppDev /> } />
              <Route path='game-development' element={ <GameDev/> } />
          </Route>
          <Route path='/faq' element={ <Faq/> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> }/>
        </Routes>
      </main>
    </>
  )
}

export default App