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
            
            <h4>Learning Flutter</h4>
            <p>
            This project was my first ever experience in mobile development as well as using Flutter. I hadn't at this time done any frontend work including web dev.
            Understanding the concept of placing components within components to create a DOM tree was valuable knowledge that I retained from this project. 
            </p>
        </div>
        <div id="codeSection">
            <h2>Some Frontend Code</h2>
            <div className="codeBox">
            <FileInput filepath="safetravelsfrontend.txt"/>
            </div>
            <p>This code shows the creation of the homepage of the mobile app</p>
            <h2>Some Backend Code</h2>
            <div className="codeBox">
            <FileInput filepath="safetravelsbackend.txt"/>
            </div>
            <p>
            Logic for parsing the API and gathering required data
            </p>
        </div>
        <div>
        <a className="demo"  href="https://youtu.be/3XROlXdFC6M?si=F9Dg8Fcu5DTn9_DX" target="_blank">Demo</a>
            <a href="https://github.com/MiguelDelao/Safe-Travels" alt="link to github repo" target="_blank">View the Repository</a>
        </div>
    </div>
    )
}