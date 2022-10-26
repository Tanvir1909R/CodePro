import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./checkout.css";

const CheckOut = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`https://learning-platform-server-sage.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handleToast = () => {
    toast.success('🦄 Thanks for purchase', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <section>
      <div className="container">
        <div className="checkoutWrapper">
          <div className="checkoutCard">
            <div className="checkoutImg">
              <img src={course.img} alt={course.name} />
            </div>
            <div className="checkoutBody">
              <h1>{course.name}</h1>
              <p>Our goal is to help you reach your goal</p>
              <p>price $80</p>
              <button onClick={handleToast}>Purchase</button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
