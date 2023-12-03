import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import "../styles/Home.css";
import Instagram from '@mui/icons-material/Instagram';
import mountainImage from "../assets/mountain.png";
import { Link } from "react-router-dom";
import WaveComponent from '../components/WaveComponent';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Umair</h2>
        <div className="prompt">
          <p>Electrical Engineering Student and Software Developer</p>
          <a href="https://www.linkedin.com/in/umazhar/">
            <LinkedInIcon style={{ marginRight: "10px" }} />
          </a>
          <a href="https://www.instagram.com/coolmathgames.ca">
            <Instagram style={{ marginRight: "10px" }} />
          </a>
          <a href="https://twitter.com/umair_mz">
            <Twitter style={{ marginRight: "10px" }} />
          </a>
          <a href="https://github.com/umazhar">
            <GitHubIcon style={{ marginRight: "10px" }} />
          </a>
          <a href="mailto:u.mazhar@icloud.com">
            <EmailIcon style={{ marginRight: "10px" }} />
          </a>
          

        </div>
        <div className="WaveContainer">
            <WaveComponent />
          </div>
      </div>
      <div class="about-container">
        <img src={mountainImage} alt="Mountain" className="image-container" />

        {/* <div className="image-container">
          <img src={mountainImage} alt="Mountain" />
        </div> */}
        <div id = "infobox">
        <h1>About</h1>
        <p>Hello! My name is Umair Mazhar! :)</p>
        <p>
          I am a fourth year electrical engineering student at the <a href="https://ubc.ca" 
          class = "link">University of British Columbia</a> located in <mark class = "highlight">Vancouver, Canada.</mark>, I
          am primarily interested in <mark class = "highlight">software development</mark> and <mark class = "highlight">hardware/software
          intersectionality.</mark> On this site, you can find my thoughts on my
          projects, experiences, and other{" "}
        <Link to="/bucketlist" class = "link">general</Link> ideas that interest me.</p>
        <p>
          If you would like to take a look at my projects, you can find a brief
          description of each of one by accessing the{" "}
          <Link class = "link" to="/projects">projects page</Link> or alternatively you can
          check out my <a href="https://github.com/umazhar" class = "link">Github</a> for the
          source code.
        </p>
        </div>
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
