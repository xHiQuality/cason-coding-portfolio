import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";


export default function Portfolio() {


    return (
        <div id="projectHighlight">
        <div id="titleSection">
        <h1>Cason's Coding e-Portfolio &#128421;&#65039;</h1>
        <h3>Personal Project</h3>
        </div>
        <div id="descriptionSection">
            <h2>
                Description
            </h2>
            <p>
            This website is intended to showcase various projects I have completed. As well as my resume and various other important information about me. I created this app using React.js through Vite and intend to
            implement a backend for blog posts using Node.js, Express.js and MySQL. While this is my first official launched website,
            I intend to create websites for other communities (clubs,churches,groups, etc.) I created the website over a week, and plan to update the site visually as well as content wise throughout my career.
            </p>
            <h4>Resources I Used</h4>
            <p>
            While all of the JSX and HTML files I created myself, I needed some help with CSS. So using various websites, and AI tools, I have 
            learned so much about web dev. Linked below is a website I used to help me along my React journey.
            So far the webite is responsive for desktop view, I will continue to update to allow easy mobile use.
            </p>
        </div>
        <div id="codeSection">
            <h2>Project Card Component</h2>
            <div className="codeBox">
            <FileInput filepath="portfoliocode.txt"/>
            </div>
            <p>This is the reuseable component that creates all of the Cards on the left side of the page. Using props, I am able to stay DRY(Don't Repeat Yourself)!</p>
            <h2>Function for Reading From File</h2>
            <div className="codeBox">
            <FileInput filepath="filereader.txt"/>
            </div>
            <p>By using useEffect and useState, I am able to read the code inside the required text file and keep good format.</p>
        </div>
        <div>
            <a href="https://roadmap.sh/react" alt="link to roadmap.sh" target="_blank">Roadmap</a>
            <a href="https://github.com/xHiQuality/portfolio-vite" alt="link to my github" target="_blank">View the Repository</a>
        </div>
    </div>
    )
}