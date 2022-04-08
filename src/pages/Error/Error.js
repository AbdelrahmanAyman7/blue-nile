import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../images/error-6641731_1280.png";
import logo from "../../images/home.png";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <Link to="/">
        <img className="errorBackBtn" src={logo} alt="title"></img>
      </Link>
      <img className="errorImage" src={PageNotFound} alt="" />
    </div>
  );
};
export default Error;
