import React, {useState} from 'react';
import WelcomeScreen from './welcome';
import {Outlet, Link, useLoaderData, useNavigate} from "react-router-dom";





export default function Root() {

    const [welcomeShown, setWelcomeShown] = useState(true);
    const navigate = useNavigate();

    const handleEnterSite = () => {
        setWelcomeShown(false);
        navigate('/cason-coding-portfolio/about-me');
    };


    return (
      <div id="root">
        {welcomeShown ? (
            <WelcomeScreen onEnter={handleEnterSite} />
        ) : (
            <>
                <div id="navbar">
            <ul id="title">
                <h1>Cason's</h1>
                <h2>Coding Portfolio</h2>
                <hr></hr>
            </ul>

            <ul id="route-links">
                <li>
                    <Link to ={"/cason-coding-portfolio/about-me"}><h1>About Me</h1></Link>
                </li>
                <li>
                    <Link to ={'/cason-coding-portfolio/resume'}><h1>Resume</h1></Link>
                </li>
                <li>
                    <Link to ={'/cason-coding-portfolio/projects'}><h1>Projects</h1></Link>
                </li>
                <li>
                    <Link to ={'/cason-coding-portfolio/blog'}><h1>Blog</h1></Link>
                </li>
                <li>
                    <Link to ={'/cason-coding-portfolio/links'}><h1>Links</h1></Link>
                </li>
                <li>
                    <Link to ={'/cason-coding-portfolio/notes'}><h1>Notes</h1></Link>
                </li>
            </ul>
        </div>
        <div>
            <Outlet/>
        </div>
            </>
        )}
      </div>
    );
  }