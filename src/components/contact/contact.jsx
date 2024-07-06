import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import conactAnimation from "../../../public/animation/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("movaqywd");
  return (
    <section className="contact-us container" id="contact">
      <div className="contact flex">
        <div className=" left-sec">
          <div className="title flex ">
            <span className="icon icon-email"></span>
            <h2>Contact Us</h2>
          </div>
          <p className="subtitle">Contact us for more information </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message">Your message:</label>
              <textarea
                required
                id="message"
                name="message"
                rows="8"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="submit">
              <button
                type="submit"
                disabled={state.submitting}
                className="submit-btn"
              >
                {state.submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {state.succeeded && (
              <p className="done flex">
                <Lottie
                  loop={false}
                  style={{ height: 60 }}
                  animationData={doneAnimation}
                />
                Your message has been sent successfully
              </p>
            )}
          </form>
        </div>
        <div className="right-sec">
          <Lottie
            className="contact-animation"
            style={{ width: 300 }}
            animationData={conactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
