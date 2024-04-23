import '../../css/projecthighlight.css';
import FileInput from "../../utility/fileInput";

export default function RedditClone() {


    return (
        <div id="projectHighlight">
            <div id="titleSection">
            <h1>Reddit Clone 📱</h1>
            
            <h3>Software Engineering (CSCI 4050)</h3>
            </div>
            <div id="descriptionSection">
                <h2>
                    Description
                </h2>
                <p>
                Me and four other students were assigned a semester long project where we chose to create a Reddit&#174;&#65039; clone.
                Through using a framework of: React.js,Node.js, and MySQL, we created a CRUD application that simulates (to the best of our ability, and time constraints) the actual product.
                Users can sign up, edit their profile, post, comment, upvote, etc. I was personally responsible for setting up the backend as well as the database.
                I created various methods for contacting the database and tested them using Postman, this was my most complicated yet exciting group project I have faced.
                </p>
                <h4>Node.js Backend</h4>
                <p>
                Becuase of the scope of this project, we used a local database. Because of this, I was able to provide a file that has the database model and update the backend accordingly to
                my peers requests, I split the code up into: routes,controllers, and models. This made readability easier and insured easy editing and
                engineering later.
                </p>
            </div>
            <div id="codeSection">
                <h2>Some Backend Code</h2>
                <div className="codeBox">
                <FileInput filepath="backendReddit.txt"/>
                </div>
                <p>Code showcases how to create and add a user to database. As well as method for finding all users.</p>
                <h2>Some Frontend Code</h2>
                <div className="codeBox">
                <FileInput filepath="frontendReddit.txt"/>
                </div>
                <p>Code for SignUp/Login Prompt for user</p>
            </div>
            <div>
                <a href="https://github.com/xHiQuality/4050project" alt="link to my github" target="_blank">View the Repository</a>
            </div>
        </div>
    )
}