import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { TiVideo } from "react-icons/ti";
import { FaMailBulk } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left-side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We're here to assist you with all your real estate needs. <br />{" "}
            Whether you're buying, selling, or renting, our team is ready to
            provide expert guidance and support. <br /> Reach out to us today,
            and let's make your property goals a reality.
          </span>

          <div className="flexColStart contactModes">
            {/* first mode */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleLeftRight size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">(+91)95286 72823</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <TiVideo size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">(+91)95286 86327</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaMailBulk size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">G-Mail </span>
                    <span className="secondaryText">info@homyz.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Mail Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contacting..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
