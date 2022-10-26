import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Category from "../../components/category/Category";
import "./courses.css";

const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-server-sage.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="coursesWrapper">
          <div className="navWrapper">
          <div className="coursesNav">
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
          </div>
          <div className="coursesCards">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
