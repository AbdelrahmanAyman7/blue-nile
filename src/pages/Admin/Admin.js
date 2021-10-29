import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import './Admin.css';
import img1 from "../../images/delfi-de-la-rua-vfzfavUZmfc-unsplash.jpg";
import logo1 from '../../images/home.png'; 
import { Link,Redirect } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import logo from '../../images/home.png'; 

var MyADMINS = []

const Admin = ({autho}) => {
  // const [selected, setSelected] = useState([]);
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);
  // const [admin, setAdmin] = useState("");
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
 
 
  // var selectedReg = []
  const header = {
    headers : {
        'Accept': 'application/json',
       "Authorization":localStorage.getItem('tokken')
},
}

 
 

 const getAdminId = (Name) => {
  MyADMINS.push(Name)
  console.log(MyADMINS)
  
 }  
console.log("admins",  MyADMINS )
 const getRegionId = (Name) => {
  setRegion(Name)
  
  
} 
const data = 
  {
    Regions: region,
    Enges: MyADMINS
}
console.log("data",data)

 const sendAllData = () => {

  axios.post("https://sleepy-mesa-34762.herokuapp.com/Reg_Enge/Add", data, header)
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
  axios.delete(`https://sleepy-mesa-34762.herokuapp.com/Reg_Enge/Remove/${id}`,header)

  .then(load=>{
      alert("تم حذف بنجاح")
      window.location.reload()
  })

}

 useEffect(() => {
  axios.get("https://sleepy-mesa-34762.herokuapp.com/Reg_Enge/GetAll",header)
  .then(res => {
    console.log("Alldata",res)
    setAllData(res.data)
  }) 
  
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
      <IconContext.Provider value={{ color: "#FFF", size:"1.3em"}}>
      <nav>
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
             
               onChange = {()=>getAdminId(adminn.name)}></input>{adminn.name}</li>
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

         <div className="container col-12">
       <div className="row"> 
         {AllData.map((allDataa,id) => (
             <div className = "card col-sm-2" key = {allDataa.id}>
             <div className = "removeRegion">
                <span onClick = {()=>removeAdminsRegion(allDataa._id)}>X</span>
                </div>
            <img src = {img1} className = "card-img-top" alt = {allDataa.title} />
           <div className = "card-body">
            <h5 className = "card-title">{allDataa.Regions}</h5><hr/>
            <h5 className = "card-title">{allDataa.Enges.map(id=>{
              return <li style = {{listStyle:"none"}}>{id}</li>
            })}</h5>
            </div>
            </div>     
            
        ))} 
         </div>
         </div>
         </nav>
         </IconContext.Provider>
      </Fragment>
    )
  }


}

//   return (
//     <Fragment>
    
//     <ul class="main-navigation">
//     <li className = "Homepage">الصفحة الرئيسية</li>
//     <li className = "Admins">المهندسين
//     <ul>
//     {admins.map((adminn,id) => (
//      <div className = "adminList">
//       <li>{adminn.name}<input type = "checkbox" onChange = {()=>getAdminId(adminn._id)}></input></li>
//       </div>
//       ))} 
//      </ul>
//     </li>

//     <li className = "Admins">المناطق
//     <ul>
//     {regions.map((regionn,id) => (
//      <div className = "adminList">
//       <li>{regionn.name}<input type = "checkbox" onChange = {()=>getAdminId(regionn._id)}></input></li>
//       </div>
//       ))} 
//      </ul>
//     </li>

    
//    <div className = "Apply">
//     <button className = "ApplyBtn" onClick = {() => sendAdminRegion()}>تسكين</button>
//    </div>
  
//    </ul>
    
//     <div className="container col-12">
//     <div className="row"> 
//     {admins.map((adminn,id) => (
//         <div className = "card col-sm-2" key = {adminn.id}>
//         <img src = {img1} className = "card-img-top" alt = {adminn.title} />
//         <div className = "card-body">
//          <h5 className = "card-title">{adminn.name}</h5>
//          <div className = "myDetails">التفاصيل</div> 
//          </div>
//         </div>     
        
//     ))} 
//     </div>
//     </div>
    
//     </Fragment>
//   );
// };

export default Admin;