import React,{ Fragment, useState } from 'react'

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData"

// STYLES
import "./Statics.css";
import ReactDOM from "react-dom";

import { DatePicker, RangeDatePicker } from "@y0c/react-datepicker";
// import calendar style
// You can customize style by copying asset folder.
import "@y0c/react-datepicker/assets/styles/calendar.scss";

// Please include the locale you want to use.
// and delivery props to calendar component
import "dayjs/locale/ko";
import "dayjs/locale/en";
import "./Statics.css";

const Statics = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

const onChange = title => (...args) => console.log(title, args[1]);
  
 const Panel = ({ header, children }) => (
  <div style={{ height: "300px" }}>
    <h1>{header}</h1>
    <div>{children}</div>
  </div>
);


  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         
          <div className="Date">
          <Panel>
            <DatePicker showToday onChange={onChange("DatePicker")} />
          </Panel>
         </div>
        
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
        
        
        </div>
      </IconContext.Provider>
      </Fragment>
  );
}


export default Statics
