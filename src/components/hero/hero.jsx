import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import delopmentAnimation from "../../../public/animation/development.json";
const Hero = () => {
  return (
    <section className="hero container flex" id="about">
      <div className="left-section">
        <img
          className="avatar"
          src="./images/menna-modified.png"
          alt="developer's photo"
        />
        <h1 className="title">FRONT-END DEVELOPER</h1>
        <p className="subtitle">
          I'm Mennatallah Gamal, a passionate frontend developer focused on
          creating engaging, user-friendly web interfaces. With expertise in
          HTML, CSS, JavaScript, and frameworks like React and Angular, I
          develop responsive, dynamic websites. I continually enhance my skills
          to keep up with industry trends, aiming to deliver smooth, attractive
          digital experiences that satisfy clients and delight users.
        </p>
        <div className="icons flex">
          <a href="https://github.com/Mennatallah-Gamal" target="_blank">
            <span className="icon icon-github"> </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mennatallah-gamal7/"
            target="_blank"
          >
            <span className="icon icon-linkedin-square"></span>
          </a>
        </div>
      </div>
      <div className="right-section ">
        <Lottie className="dev-animation" animationData={delopmentAnimation} />
      </div>
    </section>
  );
};

export default Hero;
