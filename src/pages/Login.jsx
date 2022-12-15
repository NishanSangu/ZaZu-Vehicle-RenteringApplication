
import React, { useState,useEffect } from "react"
import { useNavigate,Link } from "react-router-dom";
import "../styles/auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import {loginRoute} from "../utils/APIRoutes"

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    

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
        event.preventDefault();
        console.log("Register")
        if (handleValidation) {
            const { data } = await axios.post(
                loginRoute,
                {
                    email,
                    password
                }
            );
            if (data.success === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.success === true) {
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );
                // props.setIsLoggedIn(true);
                console.log("Successfully Signedup")
                navigate("/");
            }
        }
    };

      // Handle the validations
    const handleValidation = () => {
    if (email.length ==="") {
        toast.error("Username and Password is required!", toastOptions);
        return false;
    }
    else if (password === "") {
        console.log("validation", toast);
        toast.error("Username and Password is required!", toastOptions);
        return false;
    }
    else {
        return true;
    }
}


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(event) => handleSubmit(event)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Not registerd yet?{" "}
                        <span>
                        <Link to="/signup"> Sign Up</Link>
                            </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}
