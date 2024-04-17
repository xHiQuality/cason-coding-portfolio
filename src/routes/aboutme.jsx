import '../css/aboutme.css';
import Cason from '../images/linkedinpfp.jpg';

export default function AboutMe() {
    return(
        <div id='aboutMePage'>
            <h1 id='titleAbout'>About Me</h1>
        <div className='aboutme'>
        <div id="general-info">
            
            <h1 id='name'>Hey there!</h1>
            <div id='text-about-me'>
            <p>
            I'm Cason Pittman, a dedicated Computer Science student from the University of Georgia, set to graduate in December 2024. With a solid foundation in programming and software development, I've successfully led and contributed to several collaborative projects that enhance everyday university life and beyond.
            </p>
            <p>
            My academic journey is highlighted by my active participation in the Association for Computing Machinery (ACM) club, where I've served as the Community Engagement Chair and led an open-source initiative to develop an improved UGA Bus App. This project not only enhanced my leadership skills but also deepened my expertise in front-end development using Jetpack Compose and project management. 
            </p>
            <p>
            I'm proficient in a variety of programming languages including Java, JavaScript, and React, and I'm familiar with tools like Android Studio, VS Code, Eclipse, MySQL Workbench and Git. My project experience is diverse, ranging from creating a relational algebra engine in Java to developing a calorie tracking app using React.js and MongoDB. Each project has bolstered my understanding of critical concepts like API integration, data structures, and user interface design.
            </p>
            <p>
            Outside of coding, I've demonstrated strong leadership through organizing numerous community events with ACM, aiming to build a stronger network among computing peers at UGA. I also have led a college ministry group, where I have helped other students along their walk of faith. 
            </p>
            <p>
            I'm eager to bring my technical skills and passion for software development to a dynamic team where I can continue to grow and contribute to meaningful projects.
            </p>
            </div>
        </div>
        <div id='image-container'>
            <img src={Cason} alt='Image of Cason' id='profile-pic'></img>
        </div>
        </div>
        </div>
    );
}