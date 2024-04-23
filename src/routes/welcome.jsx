import React from "react";
import '../css/welcome.css';

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Coding with Cason!</h1>
      <h3>A coding e-Portfolio</h3>
      <button onClick={onEnter}>Enter Site</button>
      <p>This website showcases my resume, projects I've worked on, and more about me.</p>
    </div>
  );
}
