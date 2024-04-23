import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";

export default function SafeTravels() {


    return (
        <div id="projectHighlight">
        <div id="titleSection">
        <h1>SafeTravels &#9992;&#65039;</h1>
        <h3>UGA Hacks 8</h3>
        </div>
        <div id="descriptionSection">
            <h2>
                Description
            </h2>
            <p>
            During UGA Hacks 8, me and 3 other hackers completed this Android moblie app that allows users to search and save countries around the world that they want to visit. After only learning Flutter 2 days before the event,
            me and the group were able to complete a functioning app, minus a few bugs that couldn't be sorted out within the 48 hours. We used web APIs to access various facts and safety concerns for countries around the world.
            A demo of our app can be found below.
            </p>
            //TODO FINISH PROJECT ENTRIES
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
        <a className="demo"  href="https://youtu.be/3XROlXdFC6M?si=F9Dg8Fcu5DTn9_DX" target="_blank">Demo</a>
            <a href="https://github.com/xHiQuality/portfolio-vite" alt="link to my github" target="_blank">View the Repository</a>
        </div>
    </div>
    )
}