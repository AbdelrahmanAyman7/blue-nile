import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Form.css';
import './Admin/Admin';
import { Route, useHistory } from 'react-router'


const SignInForm  = () => {
  
  const [data, setData] = useState({
    phone: "",
    password: "",
  })
 const [some, setSome] = useState("");

let history = useHistory(); 

//  const [myRedirect, setMyRedirect] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("from child",some)
  localStorage.setItem('checked',true)

    axios.post("https://sleepy-mesa-34762.herokuapp.com/LogIn", {
      phone: data.phone,
      password: data.password
    })

    .then(res => {
      console.log(res)
      localStorage.setItem("tokken",res.data.tokken)
      console.log("token",localStorage)
      //  setMyRedirect(true)
      //  if (myRedirect) {
      //  return<Redirect to="/boss"/>
      //  }
      if (res.data === "boss"){
       history.push('/boss')
       console.log("response",res)
      } else {
        history.push('/boss')
      }
    })
    .catch(err => {
      console.log(err) 
    })
     
  }
 const handle = (e) => {
    e.preventDefault();
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
    return (
      <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
          تسجيل دخول
          </NavLink>
          <NavLink
            exact
            to="/"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
          انشاء حساب
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/sign-in"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
          تسجيل دخول
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
          انشاء حساب
          </NavLink>
        </div>
      <div className="formCenter">
        <form className="formFields" onSubmit={(e)=> handleSubmit(e)}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
            رقم المستخدم
            </label>
            <input
              type="text"
              id="phone"
              className="formFieldInput"
              placeholder="ادخل رقم المستخدم"
              name="phone"
              value={data.phone}
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
            كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="ادخل كلمة المرور"
              name="password"
              value={data.password}
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="formField">
          <Link to = "/Admin" className="formFieldLink">
            <button onClick = {(e)=>handleSubmit(e)} className="formFieldButton">تسجيل دخول</button>{" "}
            </Link>
            
            <Link to="/" className="formFieldLink">
            انشاء حساب
            </Link>
          </div>


        </form>
      </div>
      </div>
      </div>
    );
  }


export default SignInForm;
