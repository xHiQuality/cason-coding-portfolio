import React from "react";
import '../css/welcome.css';

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Cason's Coding Portfolio!</h1>
      <button onClick={onEnter}>Enter Site</button>
      <p>This website showcases my resume, projects I've worked on, and more about me.</p>
    </div>
  );
}
