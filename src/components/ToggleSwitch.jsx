import "../styles/ToggleSwitch.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ToggleSwitch = ({ label }) => {
  const [userType, setUserType] = useState("buyer");
  const navigate = useNavigate();
  function handleToggele() {
    if (userType == "buyer") {
      setUserType("seller");
      navigate("/seller");
    } else {
      setUserType("buyer");
      navigate("/home");
    }
    console.log(userType);
  }

  return (
    <div className="container" style={{ color: "white" }}>
      {" "}
      <div className="toggle-switch">
        <input
          onClick={handleToggele}
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
        />{" "}
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>{" "}
      </div>{" "}
    </div>
  );
};

export default ToggleSwitch;
