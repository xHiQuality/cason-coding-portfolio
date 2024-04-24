import React from "react";
import '../css/welcome.css';

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Coding with Cason!</h1>
      <h3>A coding e-Portfolio</h3>
      <button onClick={onEnter}>Enter Site</button>
      <p>This website showcases my resume, projects I've worked on, and more about me.</p>
      <h2>IMPORTANT: Please do not refresh as it will send you to a 404 page due to how GitHub Pages handles SPAs</h2>
      <h4>UGA STUDENTS: Please remember that using code from this website in your assignments goes against UGA's honesty policy. Create your own work and respect academic integrity.</h4>
    </div>
  );
}
