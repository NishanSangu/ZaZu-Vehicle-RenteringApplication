import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  function handleForm() {
    navigate("/addnewvehicle");
  }
  return (
    <>
      <FormGroup className="form__group">
        <button className="btn find__car-btn" onClick={handleForm}>
          Add New Vehicle
        </button>
      </FormGroup>
    </>
  );
};

export default UserProfile;
