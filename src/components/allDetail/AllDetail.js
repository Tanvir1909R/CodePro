import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";

const AllDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const courseDetail = useRef(null);

  useEffect(() => {
    fetch(`https://learning-platform-server-sage.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handlePdf = useReactToPrint({
    content:() => courseDetail.current,
    documentTitle: `${course.name}`,
    onAfterPrint: () => alert('pdf success')
  })

  return (
    <section>
      <div className="container">
        <div className="singleCourse">
          <div className="download" onClick={handlePdf}>
            <AiOutlineDownload />
          </div>
          <div ref={courseDetail}>
            <div className="imgCourse">
              <img src={course.img} alt={course.name} />
            </div>
            <div className="courseBody">
              <h1>{course.name}</h1>
              <p>{course.description}</p>
            </div>
          </div>
          <div style={{ margin: "30px 0", textAlign: "center" }}>
            <Link className="courseBtn" to={`/checkout/${course.id}`}>
              Get premium access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllDetail;
