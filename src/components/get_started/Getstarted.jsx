import React from "react";
import "./Getstarted.css";
const Getstarted = () => {
  return (
    <section id="getstarted" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            We don’t just find you a house, we find you a home that suits your
            life, your needs, and your budget. <br />
            Find Your Dream Home Today – Begin Your Journey with HoMYZ.
          </span>
          <button className="button">
            <a href="mailto:vaishpratham04@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
