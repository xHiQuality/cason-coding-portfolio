import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";


export default function RelationalAlgebra() {


    return (
        <div id="projectHighlight">
        <div id="titleSection">
        <h1>Relational Algebra Engine &#129518;</h1>
        <h3>Database Management (CSCI 4370)</h3>
        </div>
        <div id="descriptionSection">
            <h2>
                Description
            </h2>
            <p>
            To help with learning various SQL methods, we were tasked with implementing some of them ourselves to truly understand the logic. Methods such as select,project,join,union, etc. 
            The output of the program went to console and created appropriate data.
            While this project is not meant to visually wow the user, it shows fundamentals in object oriented programming and database calls.
            </p>
            <h4>Understanding Join with Predicate</h4>
            <p>
            One of the biggest challenges for me was understanding how to join two tables with a common predicate. This 
            was because my teammate had not yet implemented the Cartesian Product method which is essential for join operations.
            So I created had created my own version before having to implement the method AGAIN with his.
            </p>
        </div>
        <div id="codeSection">
            <h2>Select Method</h2>
            <div className="codeBox">
            <FileInput filepath="cason-coding-portfolio/selectRelationalAlgebra.txt"/>
            </div>
            <p>Selects all rows from table that match predicate supplied.</p>
            <h2>Example from Driver</h2>
            <div className="codeBox">
            <FileInput filepath="cason-coding-portfolio/driverRelationalAlgebra.txt"/>
            </div>
            <p>One of the example queries we need to create for the demo of project</p>
        </div>
        <div>
            <a href="https://github.com/xHiQuality/database-proj1" alt="link to my github" target="_blank">View the Repository (Currently Private)</a>
        </div>
    </div>
    )
}