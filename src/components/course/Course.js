import React from 'react'

const Course = ({course}) => {
  return (
    <div className='course'>
        <div className="courseImg">
            <img src={course.img} alt={course.name} />
        </div>
        <div className="courseDesc">
          <h3>{course.name}</h3>
        </div>
    </div>
  )
}

export default Course