import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({course}) => {
  return (
    <div className='course'>
        <div className="courseImg">
            <img src={course.img} alt={course.name} />
        </div>
        <div className="courseDesc">
          <h3>{course.name}</h3>
          {
            course.description.length > 100 ?
            <p> {course.description.slice(0,100) + '...'} <Link to={`/courses/detail/${course.id}`}>Read more</Link> </p>
            :
            <p>{course.description}</p>
          }
        </div>
    </div>
  )
}

export default Course