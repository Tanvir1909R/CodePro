import React from "react";
import "../blog/blog.css";

const Faq = () => {
  return (
    <section>
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="blogWrapper">
          <div className="blog">
            <h1>How To Quickly Become Proficient In Programming?</h1>
            <p>
            If your goal is to learn to code as quickly as possible, you can become proficient in as little as 3 months. If you're looking to change careers, then you can become proficient in coding for web development or data science in 3 months or more through a coding bootcamp or self-teaching.
            </p>
          </div>
          <div className="blog">
            <h1>
            Who are called Mern Stack Developers
            </h1>
            <p>
            A MERN stack developer is an expert in MongoDB, Express, React and Node. They are proficient in JavaScript and use HTML, CSS and JavaScript to handle front-end operations and JavaScript with Node. js to handle back-end operations.
            </p>
          </div>
          <div className="blog">
            <h1>Difference Between Front End & Back End Developer</h1>
            <p>
            Front-end development focuses on the visual aspects of a website – the part that users see and interact with. Back-end development comprises a site's structure, system, data, and logic. Together, front-end and back-end development combine to create interactive, visually pleasing websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
