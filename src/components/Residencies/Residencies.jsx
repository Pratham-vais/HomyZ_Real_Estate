import React from "react";
import "./Residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head ">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SwiperButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColCenter r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "red" }}>₹</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button ">
      <button onClick={() => swiper.slidePrev()}>&lt;

      </button>
      <button onClick={() => swiper.slideNext()}>
        &gt;
        </button>
    </div>
  );
};
export default Residencies;
