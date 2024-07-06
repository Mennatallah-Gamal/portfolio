import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer container ">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/mennatallah-gamal7/"
          target="_blank"
        >
          <span className="icon icon-linkedin-square"></span>
        </a>
        <a href="https://github.com/Mennatallah-Gamal" target="_blank">
          <span className="icon icon-github"></span>
        </a>
        <a href="mailto:mennag204@gmail.com">
          <span className="icon icon-email"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
