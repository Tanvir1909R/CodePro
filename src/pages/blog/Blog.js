import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <section>
      <div className="container">
        <h1>Featured Blogs</h1>
        <div className="blogWrapper">
          <div className="blog">
            <h1>What is cors?</h1>
            <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
          </div>
          <div className="blog">
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>We are using firebase for authentication.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
          </div>
          <div className="blog">
            <h1>How does the private route work?</h1>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
          </div>
          <div className="blog">
            <h1>What is Node? How does Node work?</h1>
            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code,</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog