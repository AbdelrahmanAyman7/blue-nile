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
import logo from '../../images/logo.png'; 
import "./Boss.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import heroImg1 from '../../images/ngobeni-communications-MOwl8X32SNI-unsplash.jpg';
import heroImg2 from '../../images/manuel-venturini-OCRyWB2NOjM-unsplash.jpg';
import heroImg3 from '../../images/markus-winkler-T3sNQb6NUmA-unsplash.jpg';



const Boss = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  const logoutId=(index)=>{

    if(index.title==="تسجيل خروج"){
      localStorage.clear();
      console.log("my local ",localStorage)
      }
    }
   

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#072a40",size:"1.5em" }}>
      
        {/* All the icons now are white */}
        
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="./boss" className = "BlueNile">
          <img className = "BlueNileLogo" src = {logo} alt = "title" ></img>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"} id = "myNav">
          <li className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}  onClick = {()=>logoutId(item)}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </li>

        </nav>
        <Carousel fade>
        <Carousel.Item>
        <img
          className = "d-block "
          src= {heroImg1}
          alt="" 
        />
        <Carousel.Caption>
          <h2>
          We team up with a wide variety of partners on environmental projects where we can make the most impact.
         </h2>
  
          <div class="d-grid gap-2">
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "d-block "
          src= {heroImg2}
          alt=""
        />
    
        <Carousel.Caption>
          <h2>
          The science says there’s no time to waste. EDF and our partners are launching big solutions for us.
          </h2>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "d-block"
          src= {heroImg3}
          alt=""
        />
        <Carousel.Caption>
          <h2>We take on climate change and other grave threats by identifying what’s most urgent and where we can make the most difference.</h2>
      
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </IconContext.Provider>
      </Fragment>
  );
}


export default Boss
