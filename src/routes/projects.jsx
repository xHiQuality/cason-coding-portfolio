import "../css/projects.css";
import { Link, Outlet } from "react-router-dom";


export default function Projects() {
    return (
        <div className="projectPage">
        <div className="projectColumn">
            <ProjectCard title="Test" class="class" code="code snippet" description="description" link='/projects/test' />
            <ProjectCard title="Test2" class="class2" code="code snippet 2" description="description2" link='/projects/test2'/>
            <ProjectCard title="Test3" class="class3" code="code snippet 3" description="description3" link='/projects/test3'/>
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
                <h4>Highlighted Code:</h4>
                <code>{props.code}</code>
            </div>
            <div className="descriptionSection">
                <p>{props.description}</p>
            </div>
            <Link to={props.link}>VIEW PROJECT</Link>
            
        </div>
    )
}