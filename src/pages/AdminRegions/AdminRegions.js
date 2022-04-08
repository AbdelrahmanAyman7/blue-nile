import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminRegions.css'
import img1 from "../../images/delfi-de-la-rua-vfzfavUZmfc-unsplash.jpg";
import logo from '../../images/home.png'; 
import { Link } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";

const AdminRegions = ({adminReg}) => {

    const [region, setRegion] = useState("");
    const[state, setstate] = useState("")
 
    const header ={
        headers : {
            'Accept': 'application/json',
           "Authorization":localStorage.getItem('tokken')
   },
    }
  
    // "Eng_name" : "mohab",
    // "Eng_phone" : "01119548731",
    // "REG_ID":"623f62463018abacd7dfac72",
    // "Farm_name" : "Bedoo",
    // "Sector_No" : "5",
    // "Plot_No":"6",
    // "Area":"6 elmondseen",
    // "Planting_date":"2013-08-03T02:00:00Z",
    // "Planting_Method":"Kosom 7yatk",
    // "Crop":"2sb",
    // "Variety":"boder",
    // "Total_Amount_Of_Seeds":"50",
    // "Planting_Rate":"60"
    // https://sleepy-mesa-34762.herokuapp.com/Region_data/Add
    const data = {
        R_name:region,
        
    }

    const Show_index=(id) => {
        // debugger
        console.log("sssssssssssssssss",state)   
        setstate(id)
        
     }
  
    return (
        <Fragment>
        <nav>
        <div className = "main">
        <div className = "header">
        <div className = "addRegionInput">
        </div>
        <Link to="./boss" className = "homepageLink">
        <img className = "logo" src = {logo} alt = "title"></img>
        </Link>

        </div>
        <Zoom direction = {"out"} bottom cascade>
        <div className="col-12">
        <div className="row"> 
        {adminReg.map((regionn,id) => (
            <div className = "card col-sm-2" onClick={() => Show_index(id)} key = {regionn.id}>
            <Link to = {`/eng/${regionn.id}`}>
            <img src = {img1} className = "card-img-top" alt = {regionn.title} />
            </Link>
            <div className = "card-body">
             <h5 className = "card-title">{regionn.R_name}</h5>
             </div>
            </div> 
        ))
    } 
        </div>
        </div>
        </Zoom>  
        </div>
        </nav>
       </Fragment> 
    );
    
};
   
        
        
export default AdminRegions

