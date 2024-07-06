import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed">
      <ul className="modal">
        <li className="close-button">
          <button className="icon-close" onClick={closeModal} />
        </li>
        <li>
          <a href="#about" onClick={closeModal}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeModal}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeModal}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
