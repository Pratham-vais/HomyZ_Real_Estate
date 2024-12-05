import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className="secondaryText">
                   Our Vision is to make all people <br />the best place to live for them. 

                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span><span className='secondaryText'>Lunar Street, FL-4571, Mumbai(Maharashtra), India</span>

                <div className="flexCenter f-menu">
                    <span>Property</span><span>Services</span><span>Contact Us</span><span>About</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer