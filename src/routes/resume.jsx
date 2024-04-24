import '../css/resume.css';
import resume from '../images/CasonPittmanCSResume2024.pdf';
import { Link } from 'react-router-dom';


export default function Resume() {
    return (
        <div id="resume-page">
            <h1 id='titleResume'>Resume</h1>
            <div id='resume-section'>
                <p>
                    Below is my updated resume, feel free to download it & if you have any questions shoot me an  
                    &nbsp;<Link to={'/cason-coding-portfolio/links'}>email</Link>.
                </p>
                <embed src={resume} width="100%" height="100%" />
            </div>
        </div>
    );
}