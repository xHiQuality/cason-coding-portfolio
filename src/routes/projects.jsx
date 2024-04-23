import "../css/projects.css";
import { Link, Outlet } from "react-router-dom";


export default function Projects() {
    return (
        <div className="projectPage">
        <div className="projectColumn">
            <h1>Projects</h1>
            <ProjectCard title="UGA Bus App &#128054;&#128652;" class="ACM Open Source Club" code="Kotlin(Jetpack Compose),Java Spring Boot, MySQL" description="I lead the Frontend of this OSP where we created attempted to create a better version of the UGA Bus App!" link='/projects/acm-osp-2023' />
            <ProjectCard title="Reddit&#174;&#65039; Clone 📱" class="Software Engineering (CSCI 4050)" code="React.js, Node.js, MySQL" description="I worked with 4 other students to create a Reddit Clone for our semester long project. I was responsible for backend & database" link='/projects/reddit-clone'/>
            <ProjectCard title="SafeTravels &#9992;&#65039;" class="UGA Hackathon 8" code="Dart(Flutter)" description="This was my submission to UGA Hacks 8, created in 48 hours with 3 other hackers. APIs,mobile dev, backend logic." link='/projects/safetravels'/>
            <ProjectCard title="Test2" class="class4" code="code snippet 4" description="description4" link='/projects/test4'/>
            <ProjectCard title="Test2" class="class5" code="code snippet 5" description="description5" link='/projects/test5'/>

        </div>
        <div id="outlet">
        <Outlet/>
        </div>
        </div>
    )
}

const ProjectCard = (props) => {



    return (
        <div className="projectCard">
            <div className="titleSection">
                <h1>{props.title}</h1>
                <h3>{props.class}</h3>
            </div>
            <div className="codeSection">
                <h4>Languages & Frameworks</h4>
                <code>{props.code}</code>
            </div>
            <div className="descriptionSection">
                <p>{props.description}</p>
            </div>
            <Link to={props.link}>VIEW PROJECT</Link>
            
        </div>
    )
}