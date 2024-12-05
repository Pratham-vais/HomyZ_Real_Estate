import React, {useState} from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)

  const getMenuStyle=()=>{
    if (document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Live-X" width={100} />
        <OutsideClickHandler onOutsideClick={()=>
          setmenuOpened(false)
        }>

        <div className=" flexCenter h-menu" style={getMenuStyle(menuOpened)}>
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Values</a>
          <a href="#contact">Contact Us</a>
          <a href="#getstarted">Get Started</a>
          <button className="button"> 
            <a href="mailto:vaishpratham04@gmail.com">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
