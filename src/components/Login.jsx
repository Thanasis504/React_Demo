import React from "react";
import Navbar from "../components/Navbar";
import GlitchEffect from "../components/GlitchEffect";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      {/* Glitch effect and Navbar are outside of the form for better layout control */}
      <GlitchEffect />
      <Navbar />
      
      {/* Container for the content */}
      <div className="container mt-5">
        <div className="row justify-content-start">
            <div className="col-md-6">
            {/* Jumbotron styling for the login section */}
            <div className="jumbotron bg-transparent mb-0 pt-3 radius-0 text-left">
                
                <p className="text-white-50">Enter your credentials to access the CTF challenges</p>
                
                {/* LoginForm component is used here */}
                <LoginForm />
            </div>
            </div>
        </div>
        </div>

    </div>
  );
};

export default Login;
