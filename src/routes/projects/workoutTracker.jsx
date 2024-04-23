import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";

export default function WorkoutTracker() {


    return (
        <div id="projectHighlight">
            <div id="titleSection">
            <h1>Workout Tracker + &#127947;&#65039;&#8205;&#9794;&#65039;</h1>
            <h3>Web Development (CSCI 4300)</h3>
            </div>
            <div id="descriptionSection">
                <h2>
                    Description
                </h2>
                <p>
                This project introduced me to CRUD and also working with non-relational databases. Through various methods we could gather info from the database, and display
                various workouts and food that the user had done throughout the day. This app is no where near perfect and if not for needing to submit for a grade would still be
                a WIP. However, for me, the application isn't the important part of this assignment. This skills I learned from this helped me create the Reddit Clone and this very website.
                </p>
                <h4>Difficulties && Challenges</h4>
                <p>
                We struggled with authentication for this project, as well as how a non relational database was not the most effiecent for our idea. Looking back, using MySQL would have been
                much easier, however due to constraints for the project MongoDB must have been used.
                </p>
            </div>
            <div id="codeSection">
                <h2>Some Frontend Code</h2>
                <div className="codeBox">
                <FileInput filepath="workoutfrontend.txt"/>
                </div>
                <p>This function creates a workout card to be display on the users main page.</p>
                <h2>Some Backend Code</h2>
                <div className="codeBox">
                <FileInput filepath="workoutbackend.txt"/>
                </div>
                <p>Some axios statements that showcase the useEffect() Hook</p>
            </div>
            <div>
                <a href="https://github.com/xHiQuality/Workout-Tracker-REACT" alt="link to the project" target="_blank">View the Repository</a>
            </div>
        </div>
    )
}



