import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineDownload } from 'react-icons/ai'

const AllDetail = () => {
    const {id} = useParams();
    const [course, setCourse] = useState({})

    useEffect(() => {
        fetch(`https://learning-platform-server-sage.vercel.app/courses/${id}`)
        .then(res => res.json())
        .then(data =>setCourse(data))
    }, [id])
    

  return (
    <section>
        <div className="container">
            <div className="singleCourse">
                <div className="download">
                    <AiOutlineDownload />
                </div>
                <div className="imgCourse">
                    <img src={course.img} alt={course.name} />
                </div>
                <div className="courseBody">
                    <h1>{course.name}</h1>
                    <p>{course.description}</p>
                    <div style={{ margin:'30px 0' }}>
                    <Link to={`/checkout/${course.id}`}>Get premium access</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllDetail