import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import HomeSeller from "../pages/HomeSeller";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import CarDetailsSell from "../pages/CarDetailsSell";
import CarSellDetails from "../pages/CarSellDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] =useState(null);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/home" element={<Home
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />
      } />

      <Route path="/about" element={<About
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />


      <Route path="/cars" element={<CarListing
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />


      <Route path="/cars/:slug" element={<CarDetails
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />} />
      
      <Route path="/carssell/:slug" element={<CarDetailsSell
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/carsselldetails/:slug" element={<CarSellDetails
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/blogs" element={<Blog
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/blogs/:slug" element={<BlogDetails
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/contact" element={<Contact
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/signup" element={<Signup
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/login" element={<Login
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="/seller" element={<HomeSeller
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

      <Route path="*" element={<NotFound
      setIsLoggedIn={setIsLoggedIn} 
      isLoggedIn={isLoggedIn} 
      setLoggedInUser={setLoggedInUser}
      loggedInUser={loggedInUser}
      />} />

    </Routes>
  );
};

export default Routers;
