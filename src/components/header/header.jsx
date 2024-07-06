import React, { useEffect, useState } from "react";
import "./header.css";
import Modal from "./modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && <Modal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
