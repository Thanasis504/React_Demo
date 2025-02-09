import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h1 className="display-1 bold color_white content__title">
              AMRITA CTF<span className="vim-caret">&nbsp;</span>
            </h1>
            <h1 className="display-1 bold color_white content__title2">2024</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <p className="mt-5 text-grey text-spacey hackerFont lead">
              The quieter you become, the more you are able to hear.
            </p>
            <button
              className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter"
              onClick={() => navigate("/login")}
            >
              <h4>Login</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
