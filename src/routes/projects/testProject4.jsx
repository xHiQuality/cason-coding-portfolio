import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";


export default function TestProject4() {


    return (
        <div id="projectHighlight">
        <div id="titleSection">
        <h1>Title of Project</h1>
        <h3>Class of Project</h3>
        </div>
        <div id="descriptionSection">
            <h2>
                Description Header
            </h2>
            <p>
            this is a very long paragraph about the test project with more detail and stuff, How big could this go, idk if i keep typing will it reach the edge of the screen I will keep typing
            </p>
            <h4>Subsection Header</h4>
            <p>
            this is a very long paragraph about the test project with more detail and stuff, How big could this go, idk if i keep typing will it reach the edge of the screen I will keep typing
            </p>
        </div>
        <div id="codeSection">
            <h2>Code Header</h2>
            <div className="codeBox">
            <FileInput filepath="test1.txt"/>
            </div>
            <p>light description of code and describing it's functionality</p>
            <h2>Another Code Header</h2>
            <div className="codeBox">
            <FileInput filepath="test2.txt"/>
            </div>
            <p>light description of code and describing it's functionality</p>
        </div>
        <div>
            <a href="https://github.com/xHiQuality/portfolio-vite" alt="link to my github" target="_blank">View the Repository</a>
        </div>
    </div>
    )
}