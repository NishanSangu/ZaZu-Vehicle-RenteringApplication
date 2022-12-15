import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { useNavigate, Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

export default function AddNewVehicle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [millage, setMillage] = useState("");
  const [capacity, setCapacity] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  // Tosting option
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    // ToDo\
    alert("called submit button");
  };
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(event) => handleSubmit(event)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"> Add your Vehicle </h3>{" "}
          <div className="text-center"></div>{" "}
          <div className="form-group mt-3">
            <label> Select Vehicle image </label>{" "}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            />{" "}
          </div>{" "}
          <div className="form-group mt-3">
            <label> Vehicle Type </label>{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Vehicle Type"
              name="userName"
              onChange={(e) => setVehicleType(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="form-group mt-3">
            <label> Model </label>{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Model"
              name="email"
              onChange={(e) => setModel(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="form-group mt-3">
            <label> Millage </label>{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Millage"
              name="password"
              onChange={(e) => setMillage(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="form-group mt-3">
            <label> Engine Capacity </label>{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Engine Capacity"
              name="conPassword"
              onChange={(e) => setCapacity(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="form-group mt-3">
            <label> Description </label>{" "}
            <textarea
              type="text"
              className="form-control mt-1"
              placeholder="Description"
              name="conPassword"
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
      <ToastContainer />
    </div>
  );
}
