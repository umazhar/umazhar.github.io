import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Instagram } from "@material-ui/icons";
import mountainImage from "../assets/mountain.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Umair</h2>
        <div className="prompt">
          <p>Electrical Engineering Student and Software Developer</p>
          <a href="https://www.linkedin.com/in/umazhar/">
            <LinkedInIcon style={{ marginRight: "10px" }}/>
          </a>
          <a href="https://www.instagram.com/coolmathgames.ca">
            <Instagram style={{ marginRight: "10px" }}/>
          </a>
          <a href="https://github.com/umazhar">
            <GithubIcon style={{ marginRight: "10px" }}/>
          </a>
          <a href="mailto:u.mazhar@icloud.com">
            <EmailIcon style={{ marginRight: "10px" }}/>
          </a>
        </div>
      </div>
      <div class="about-container">
        <div className="image-container">
          <img src={mountainImage} alt="Mountain" />
        </div>
        <h1>About</h1>
        <p>Hello! My name is Umair Mazhar! :)</p> 
        <p>
          I am a fourth year electrical engineering student at the{" "}
          <i>University of British Columbia</i> located in Vancouver, Canada. I am primarily interested in software development and hardware/software intersectionality. On this site, you can find my thoughts on my projects, experiences, and other general ideas that interest me.


        </p>
        <p>
          If you would like to take a look at my projects, you can find a brief
          description of each of one by accessing the{" "}
          <a href="./projects.html">projects page</a> or alternatively you can
          check out my <a href="https://github.com/umazhar">Github</a> for the
          source code.
          
        </p>
        <img
          class="gh-chart"
          src="http://ghchart.rshah.org/umazhar"
          alt="umazhar's Github chart"
        />
      </div>
    </div>
  );
}

export default Home;
