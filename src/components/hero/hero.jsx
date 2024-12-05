import React from "react";
import "./hero.css";
import { ImLocation2 } from "react-icons/im";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart  hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "3 rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> More Suitable <br /> Property
            </motion.h1>
          </div>
          <div
            className="flexColStart 
          hero-dcrptn"
          >
            <span className="secondaryText">
              Find a variety of property that suits you very easility
            </span>
            <span className="secondaryText">
              Forget all the difficulties for finding a Residence for you
            </span>
          </div>
          <motion.div inital={{ x: "7 rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration:2, type: "spring" }}
            className="flexCenter hero-search">
            <ImLocation2 color="var(--blue)" size={25} className="local" />
            <input type="text" />
            <button className="button">Search</button>
          </motion.div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start="9000" end="9600" duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start="1950" end="2500" duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end="35" />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img
              src="./hero-image.png"
              className="image-container"
              alt="Hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
