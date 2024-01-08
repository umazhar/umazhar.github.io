import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WaveComponent from '../components/WaveComponent';
import '../styles/Home.css';
import mountainImage from "../assets/mountain.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="wave-and-content">
                <WaveComponent />
            </div>
            <div className="overlay-content">
                    <div className="about">
                        <h2> Umair Mazhar</h2>
                        <div className="prompt">
                            <p>Electrical Engineering @ UBC</p>
                            <a href="https://www.linkedin.com/in/umazhar/" style={{ marginRight: "10px" }}>
                                <LinkedInIcon />
                            </a>
                            <a href="https://www.instagram.com/coolmathgames.ca" style={{ marginRight: "10px" }}>
                                <InstagramIcon />
                            </a>
                            <a href="https://twitter.com/umair_mz" style={{ marginRight: "10px" }}>
                                <TwitterIcon />
                            </a>
                            <a href="https://github.com/umazhar" style={{ marginRight: "10px" }}>
                                <GitHubIcon />
                            </a>
                            <a href="mailto:u.mazhar@icloud.com" style={{ marginRight: "10px" }}>
                                <EmailIcon />
                            </a>
                        </div>
                    </div>
                </div>

            <div className="about-container">
                <img src={mountainImage} alt="Mountain" className="image-container" />
                <div id="infobox">
                    <h1>About</h1>
                    <p>My name is Umair :)</p>
                    <p>
                        I am a fourth year electrical engineering student at the <a href="https://ubc.ca" className="link">University of British Columbia</a> located in <mark className="highlight">Vancouver, Canada.</mark>, I am primarily interested in <mark className="highlight">software development</mark> and <mark className="highlight">hardware/software intersectionality.</mark> On this site, you can find my thoughts on my projects, experiences, and other <Link to="/bucketlist" className="link">general</Link> ideas that interest me.
                    </p>
                    <p>
                        If you would like to take a look at my projects, you can find a brief description of each of one by accessing the <Link className="link" to="/projects">projects page</Link> or alternatively you can check out my <a href="https://github.com/umazhar" className="link">Github</a> for the source code.
                    </p>
                </div>
                <img className="gh-chart" src="http://ghchart.rshah.org/umazhar" alt="umazhar's Github chart" />
            </div>
            
        </div>
    );
}

export default Home;
