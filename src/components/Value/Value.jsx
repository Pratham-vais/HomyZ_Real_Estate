import React, {useState} from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import { MdArrowDropDownCircle } from "react-icons/md";
const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Value" />
          </div>
        </div>

        {/* Right-side */}

        <div className="flexColStart div">
          <span className="orangeText">Our Value</span>
          <span class="primaryText">Value We Give to You</span>
          <span class="secondaryText">
            We always ready to help by providing best services for you.
            <br />
            We believe a place to Live can make your Life better.
          </span>

          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordianButton">
                      <AccordionItemState>
                        {({expanded})=>expanded ? setClassName("expanded"):setClassName("collapsed")}
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdArrowDropDownCircle size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
