import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Engineers.css'
import img1 from "../../images/delfi-de-la-rua-vfzfavUZmfc-unsplash.jpg";
import logo from '../../images/home.png'; 
import { Link } from 'react-router-dom';


const Engineers = () => {

    const [engineer, setEngineer] = useState("");
    const [engineers, setEngineers] = useState([]);
 

    const header ={
        headers : {
            'Accept': 'application/json',
           "Authorization":localStorage.getItem('tokken')
   },
    }
   
    const data = {
        R_name:engineer
    }

    
    
    const removeEngineers = (id) => {
        axios.delete(`https://sleepy-mesa-34762.herokuapp.com/Regions/Remove/${id}`,header)
     
        .then(load=>{
                alert("تم حذف المهندس بنجاح")
                window.location.reload()
            }    
        )
    }
    
        
    useEffect(() => {
     axios.get("https://sleepy-mesa-34762.herokuapp.com/Regions/GetAll",header)
    .then(res => {
      console.log("response",res)
      setEngineers(res.data)
    }) 
    
     },[])
  
    return (
        <Fragment>
        <nav>
        <div className = "main">
        <div className = "engHeader">
        <Link to="./boss" className = "homepageLink">
        <img className = "engLogo" src = {logo} alt = "title"></img>
        </Link>
     
        </div>
        <div className="container col-12">
        <div className="row"> 
        {engineers.map((Eng,id) => (
            <div className = "card col-sm-2" key = {Eng.id}>
            <div className = "removeRegion">
            <span onClick = {() => removeEngineers(Eng._id)}>X</span>
            </div>
            <img src = {img1} className = "card-img-top" alt = {Eng.title} />
            <div className = "card-body">
             <h5 className = "card-title">{Eng.R_name}</h5>
             </div>
            </div>     
        ))} 
        </div>
        </div>
        </div>
        </nav>
       </Fragment> 
    );
    
};
   
export default Engineers