import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CheckOut = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({})

    useEffect(() => {
        fetch(`https://learning-platform-server-sage.vercel.app/courses/${id}`)
        .then(res => res.json())
        .then(data =>setCourse(data))
    }, [id])

  return (
    <div>{course.name}</div>
  )
}

export default CheckOut