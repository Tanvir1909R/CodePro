import React, { useEffect, useState } from 'react'
import Course from '../components/course/Course';

const FrontEnd = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch('https://learning-platform-server-sage.vercel.app/courses')
    .then(res => res.json())
    .then(data => {
      const courses = data.filter(course => course.category === 'front-end')
      setCourses(courses)
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
    </div>
  )
}

export default FrontEnd