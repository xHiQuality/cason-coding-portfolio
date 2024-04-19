import React, {useState} from 'react';
import WelcomeScreen from './welcome';
import {Outlet, Link, useLoaderData, useNavigate} from "react-router-dom";





export default function Root() {

    const [welcomeShown, setWelcomeShown] = useState(true);
    const navigate = useNavigate();

    const handleEnterSite = () => {
        setWelcomeShown(false);
        navigate('/about-me');
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
                    <Link to ={"/about-me"}><h1>About Me</h1></Link>
                </li>
                <li>
                    <Link to ={'/resume'}><h1>Resume</h1></Link>
                </li>
                <li>
                    <Link to ={'/projects'}><h1>Projects</h1></Link>
                </li>
                <li>
                    <Link to ={'/links'}><h1>Links</h1></Link>
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