import { useState, useEffect } from "react";
import "./Eng.css";
import axios from "axios";
import { Route, useHistory } from "react-router";

const Eng = ({ adminReg }) => {
  
  const useSignUpForm = () => {
    const [inputs, setInputs] = useState({});
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://sleepy-mesa-34762.herokuapp.com/Region_data/Add',inputs)
        // .then(res => {
        //   window.location.reload()
        // })
        // .catch((err) => {
        //   history.push("/error");
        //   console.log(err);
        // });
        console.log("inputssssss",inputs)
    };

    const handleInputChange = (e) => {
      e.persist();
      setInputs((inputs) => ({
        ...inputs,
        [e.target.name]: e.target.value,
      }));
      console.log("formmmmminput", inputs);
    };
    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  return (
    <div className="main">
      <div className="container">
        <div className="form">
        <h1>Admin form</h1>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="Eng_name"
            value={inputs.Eng_name}
            placeholder="Eng name"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="tel"
            name="Eng_phone"
            value={inputs.Eng_phone}
            placeholder="Eng phone"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="REG_ID"
            value={inputs.REG_ID}
            placeholder="Region id"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="url"
            name="Farm_name"
            value={inputs.Farm_name}
            placeholder="Farm name"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="number"
            name="Sector_No"
            value={inputs.Sector_No}
            placeholder="Sector no"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="number"
            name="Plot_No"
            value={inputs.Plot_No}
            placeholder="Plot no"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="Area"
            value={inputs.Area}
            placeholder="Area"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="date"
            name="Planting_date"
            value={inputs.Planting_date}
            placeholder="Planting date"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="Crop"
            value={inputs.Crop}
            placeholder=" Crop"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="Variety"
            value={inputs.Variety}
            placeholder=" Variety"
          />
          <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="Total_Amount_Of_Seeds"
          value={inputs.Total_Amount_Of_Seeds}
          placeholder=" Total amount of seeds"
        />
        <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        name="Planting_Rate"
        value={inputs.Planting_Rate}
        placeholder=" Planting rate"
      />

          <button onClick={(e) => handleSubmit(e)}> Submit</button>
        </div>
      </div>
    </div>
    
  );
};

export default Eng;
