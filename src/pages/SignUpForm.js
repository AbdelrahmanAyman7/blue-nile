import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignUpForm  = () => {
   
    const [data, setData] = useState({
      email: "",
      password: "",
      name: "",
      phone: "",
      key:""
    })

 const handleSubmit = (e) => {
  e.preventDefault();
    axios.post("https://sleepy-mesa-34762.herokuapp.com/SignUp",{
      name: data.name,
      email: data.email,
      password: data.password,
      key: data.key,
      phone: data.phone,
    })
    
    .then(res => {  
      alert("تم انشاء الحساب الرجاء تسجيل الدخول")
      window.location.reload()
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

  // if (data.key === ""){
    return (
      <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem" id = "switch"
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
        <form onSubmit={(e) => handleSubmit(e)} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              اسم المستخدم 
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="ادخل الاسم"
              name="name"
              value={data.name}
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
            <label className="formFieldLabel" htmlFor="email">
              البريد الاليكتروني
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder = "ادخل البريد الاليكتروني"
              name="email"
              value={data.email}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
          رقم التليفون
          </label>
          <input
            type="text"
            id="phone"
            className="formFieldInput"
            placeholder = "ادخل رقم التليفون"
            name="phone"
            value={data.phone}
            onChange={(e) => handle(e)}
          />
        </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="key">
              كود المستخدم
            </label>
            <input
              type="password"
              id="key"
              className="formFieldInput"
              placeholder = "ادخل كود المستخدم"
              name="key"
              value={data.key}
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="formField">
          <Link to="/sign-in" className="formFieldLink">
            <button onClick = {(e)=>handleSubmit(e)} className="formFieldButton">انشاء حساب</button>{" "}
            </Link>
            
            <Link to="/sign-in" className="formFieldLink">
            أنا عضو بالفعل
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
 
}

export default SignUpForm;
