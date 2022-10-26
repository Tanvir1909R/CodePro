import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footerWrapper">
        <div className="footerLogoSec">
          <div className="logo">
            <Link to="/">
              <span>Code.</span>Pro
            </Link>
          </div>
          <div className="socialWrapper">
            <p>Our goal is to help you reach your goal</p>
            <div className="social">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagramSquare />
            </div>
          </div>
        </div>
        <div className="languageSec">
            <h2>languages</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Python</p>
            <p>Ruby</p>
            <p>Node js</p>
            <p>kotlin</p>
        </div>
        <div className="featureSec">
            <h2>Featured Programs</h2>
            <p>Data Engineer</p>
            <p>Data Analyst</p>
            <p>Cloud Computing</p>
            <p>Cybersecurity</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
