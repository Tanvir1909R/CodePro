import React, { useEffect, useState } from 'react'
import Course from '../components/course/Course';

const GameDev = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch('https://learning-platform-server-sage.vercel.app/courses/game-development')
    .then(res => res.json())
    .then(data => {
      setCourses(data)
      setLoading(false)
    })
  },[])

  return (
    <div className='courseWrapper'>
      {
        loading ?
        <p>loading...</p>
        :
        courses.map(course => <Course key={course.id} course={course} />)
      }
      {/* {
        courses.map(course => <Course key={course.id} course={course} />)
      } */}
    </div>
  )
}

export default GameDev