import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Regions.css'
import img1 from "../../images/246196080_402939348095626_760896911964830040_n.png";
import logo from '../../images/home.png'; 
import { Link } from 'react-router-dom';

const Regions = () => {

    const [region, setRegion] = useState("");
    const [regions, setRegions] = useState([]);
 

    const header ={
        headers : {
            'Accept': 'application/json',
           "Authorization":localStorage.getItem('tokken')
   },
    }
   
    const data = {
        R_name:region
    }

    const addRegions = () => {
        axios.post("https://sleepy-mesa-34762.herokuapp.com/Regions/Add", data, header)
        .then(load=>{
            if(load.data === "this region is exsisted"){
                alert("هذا المنطقة مسجلة من قبل")
            }else{
                alert("تم اضافة منطقة بنجاح")
                window.location.reload()
            }
        
        })
        
    }
    
    const removeRegions = (id) => {
        axios.delete(`https://sleepy-mesa-34762.herokuapp.com/Regions/Remove/${id}`,header)
     
        .then(load=>{
            if (load.data ==="Done"){
                alert("تم حذف منطقة بنجاح")
                window.location.reload()
            }
           else{
            alert("لا يمكن حذف هذه المنطقة لوجود بها مهندسين")
           }
          
           
        })
    }
    
        
    useEffect(() => {
     axios.get("https://sleepy-mesa-34762.herokuapp.com/Regions/GetAll",header)
    .then(res => {
      console.log("response",res)
      setRegions(res.data)
    }) 
    
     },[])
  
    return (
        <Fragment>
        <nav>
        <div className = "main">
        <div className = "header">
        <Link to="./boss" className = "homepageLink">
        <img className = "logo" src = {logo} alt = "title"></img>
        </Link>
        <div className = "addRegionInput">
        <input type = "text" value = {region} onChange = {(e) => setRegion(e.target.value)}></input>
        <button className = "addRegionBtn" onClick = {(e) => addRegions(e)}>اضف منطقة</button>
        </div>
        </div>
        <div className="container col-12">
        <div className="row"> 
        {regions.map((regionn,id) => (
            <div className = "card col-sm-2" key = {regionn.id} onClick = {() => removeRegions(regionn._id)}>
            <div className = "removeRegion">
            <span>X</span>
            </div>
            <img src = {img1} className = "card-img-top" alt = {regionn.title} />
            <div className = "card-body">
             <h5 className = "card-title">{regionn.R_name}</h5>
             <div className = "myDetails">التفاصيل</div> 
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
   
        
        
export default Regions

// Axios.get('https://trading-stock.herokuapp.com/authentication/logout',
//       ).then(res=>{localStorage.clear()
//         window.location="/"})}

