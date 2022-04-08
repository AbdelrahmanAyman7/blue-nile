import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import './Admin.css';
import img1 from "../../images/thisisengineering-raeng-5Vb9SeLbiWw-unsplash.jpg";
import logo1 from '../../images/home.png'; 
import { Link,Redirect } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import logo from '../../images/home.png'; 
import { Zoom } from "react-awesome-reveal";

var MyADMINS = [
]

const Admin = ({autho}) => {
  const [region, setRegion] = useState([]);
  const [regions, setRegions] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [AllData, setAllData] = useState([]);

 

  const handleNavbar = () => {
    let x = document.getElementById("navHeader");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
 
  const header = {
    headers : {
        'Accept': 'application/json',
       "Authorization":localStorage.getItem('tokken')
},
}

 
 

 const getAdminId = (Name,Phone) => {
  MyADMINS.push({name:Name,phone:Phone})
  console.log("myAdmins",Name,Phone)
  
 }  
 const getRegionId = (Name) => {
  setRegion(Name)
  
  
} 

 const sendAllData = () => {
  const data = 
  {
    R_name:region,
    R_Enges: [{
      name:MyADMINS[0].name,
      phone: MyADMINS[0].phone
    }],
 }
 console.log("dataaaaaaaaaaaaa",data)
  axios.post('https://sleepy-mesa-34762.herokuapp.com/Regions/Add_ENG', data, header)
  .then(load=>{
    
    if (load.data === "this name is exsist before"){
      alert("هذا المهندس تم تسكينه من قبل علي هذه المنطقة")
      window.location.reload()
    } else{
      alert("تم التسكين بنجاح")
      window.location.reload()
    }
})

}
const removeAdminsRegion = (id) => {
  axios.delete(`https://sleepy-mesa-34762.herokuapp.com/Regions/Remove/${id}`,header)

  .then(load=>{
      alert("تم حذف بنجاح")
      window.location.reload()
  })


}

  const removeEng = async (id,name) => {
    const removeEnges = 
    {
      _id:id,
      Enges:name,
  }

  await axios.post('https://sleepy-mesa-34762.herokuapp.com/Regions/Remove_ENG',removeEnges,header)
  
    .then(res=>{
      if(res.data === "deleted"){
        alert("تم حذف المهندس بنجاح")
       window.location.reload()
      }
   })
}

 useEffect(() => {
  axios.get("https://sleepy-mesa-34762.herokuapp.com/Regions/GetAll",header)
  .then(res => {
    console.log("AllRegions",res)
    setRegions(res.data)

  }) 
  
  axios.get("https://sleepy-mesa-34762.herokuapp.com/Enges/GetAll",header)
 .then(res => {
  console.log("AllAdmins",res)
   setAdmins(res.data)

 }) 
 console.log("all blocks",AllData)
  },[])


    
  if(!autho==='true')
  {
    return<Redirect to="/sign-in"/>
  }
  else{
    return ( 
  
      <Fragment>
      <IconContext.Provider value={{ color: "#060b26", size:"1.3em"}}>
      <nav id = "aNav">
      
      <Link to="./boss" className = "homepageLink">
      <img className = "logo" src = {logo} alt = "title"></img>
      </Link>
      <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={handleNavbar} />
      </Link>
    </div>
         <div className = "myheader" id = "navHeader">
          <div className = "menu">
              <li>
             <label for="drop-1" className ="toggle">المهندسين</label>
             <ul>
             {admins.map((adminn,id) => (
              <li><input type = "checkbox" 
             
               onChange = {()=>getAdminId(adminn.name,adminn.phone)}></input>{adminn.name}</li>
              ))} 
             </ul> 
             </li>
              <li>
            <label for="drop-2" className ="toggle">المناطق</label>
             <ul>
             {regions.map((regionn,id) => (
              <li><input type = "checkbox" onChange = {()=>getRegionId(regionn.R_name)}></input>{regionn.R_name}</li>
              ))}                 
            </ul>
            </li>
            
           </div>
           <div className = "Apply">
            <button className = "ApplyBtn" onClick = {sendAllData}>تسكين</button>
           </div>
      
          </div>
          </nav>  
          <Zoom direction = {"out"} bottom cascade>
         <div className="col-12">
       <div className="row"> 
              
         {regions.map((allDataa,id) => (
             <div className = "card col-sm-2" key = {allDataa.id}>
             <div className = "removeX">
                <span onClick = {()=>removeAdminsRegion(allDataa._id)}>X</span>
                </div>
            <img src = {img1} className = "card-img-top" alt = {allDataa.title} />
           <div className = "card-body">
            <h5 className = "card-title">{allDataa.R_name}</h5><hr/>
            <h5 className = "card-title">{allDataa.R_Enges.map(data=>{
              return <li className = "removeEng" style = {{listStyle:"none"}}>{data.name}<span className = "removeEngSpan" onClick = {()=>removeEng(allDataa._id,id)}>x</span></li> 
            })}</h5>
            </div>
            </div>     
            
        ))} 
         </div>
         </div>
         </Zoom>
     
         </IconContext.Provider>
      </Fragment>
    )
  }


}

export default Admin;