import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
      <div className="container">
        <h1 className="display-1 bold color_white text-center">
          <span className="color_danger">ABOUT</span> US<span className="vim-caret">&nbsp;</span>
        </h1>
        <p className="text-grey text-spacey text-center hackerFont lead">
          A community of like-minded individuals who support cybersecurity and FOSS.
        </p>

        <div className="row justify-content-center hackerFont">
          <div className="col-md-8">
            <h5 className="bold color_white pt-3">What is Capture the Flag?</h5>
            <p>
              A Capture The Flag (CTF) contest is a cybersecurity competition designed to challenge participants with security-related problems.
              It involves solving hacking challenges in a legal environment to gain hands-on experience.
            </p>

            <h5 className="bold color_white pt-3">About Amrita CTF</h5>
            <p>
              Amrita CTF is a sub-event of PICT's <a href="https://pictinc.org">Impetus and Concepts</a> mega event, where students participate from around the world.
              Our aim is to spread cybersecurity awareness and teach about vulnerabilities and protection techniques.
            </p>

            <h5 className="bold color_white pt-3">Who can play Amrita CTF?</h5>
            <p>gibberrishgibberrishgibberrishgibberrish.</p>

            <div className="row text-center pt-5">
              <div className="col-xl-12">
                <Link to="/login" className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter">
                  <h4>LET IT RIP!</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
