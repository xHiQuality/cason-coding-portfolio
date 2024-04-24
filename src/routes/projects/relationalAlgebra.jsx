import "../../css/projecthighlight.css";
import FileInput from "../../utility/fileInput";


export default function RelationalAlgebra() {

    const select = `
    /**
     * Performs the select operation on the relation rel
     * by applying the predicate p.
     * 
     * @return The resulting relation after applying the select operation.
     */
    public Relation select(Relation rel, Predicate p) {    
        // Error handling
        if (rel == null || p == null) {
            System.out.println("Please enter valid parameters");
            return null;
        }


        // int index = rel.getAttrIndex(p.toString());
        int rowSize = rel.getSize();
        List<Cell> empty = new ArrayList<Cell>();
        List<Type> types = rel.getTypes();
        // Type P_type = types.get(index);

        Relation select = new RelationBuilder()
            .attributeNames((rel.getAttrs()))
            .attributeTypes((rel.getTypes()))
            .build();

        for (int i = 0; i < rowSize; i++) {
            empty.clear();


            if (p.check(rel.getRow(i))) { 
                // empty.add(rel.getRow(i));
                select.insert(rel.getRow(i));

            } // if 
            
            
        } // for 
        

        return select;
  
    };
    `;

    const driver = `
    /**
         * EXAMPLE 1:
         * select *
         * FROM instructor
         * JOIN student ON instructor.salary < 100000 AND student.tot_cred < 100;
         *            
         */
        System.out.println("\nSTART OF EXAMPLE 1");
        System.out.println("Retrieve all columns from the instructor table and student table,\n joining them based on conditions where instructor salary is less than $100,000 and student total credits are less than 100.\n");
        //initial predicate string
        String predString = "salary < 100000";
        //adding attrs to respective tables then to collection
        table1attrs.addAll(instructor.getAttrs());
        attrs.add(table1attrs);
        table2attrs.addAll(student.getAttrs());
        attrs.add(table2attrs);
        //initializing predicate and RAImpl
        Predicate p = new PredicateImpl(predString,attrs);
        RAImpl ex1 = new RAImpl();

        //select * from instructor WHERE salary < 100000
        Relation selected = ex1.select(instructor, p);
        //ex1.select(instructor, p).print();
        table2attrs.addAll(student.getAttrs());
        attrs.add(table2attrs);
        
        
        //instructor and Student share similar names so let's rename the attributes
        List<String> newAttrs = new ArrayList<>();
        for (String str: table1attrs) {
            newAttrs.add("instr_"+str);
        }
        attrs.clear();
        attrs.add(newAttrs);

        Relation renamedSelected = ex1.rename(selected, table1attrs, newAttrs);
        newAttrs.clear();
        for (String str: table2attrs) {
            newAttrs.add("stud_"+str);
        }
        attrs.add(newAttrs);
        Relation renamedStudent = ex1.rename(student, table2attrs, newAttrs);

        //next predicate
        predString = "stud_tot_cred < 100";
        Predicate p2 = new PredicateImpl(predString, attrs);
        //JOIN operation
        ex1.join(renamedSelected, renamedStudent,p2).print();
        //clear for next example
        attrs.clear();
        table1attrs.clear();
        table2attrs.clear();
        newAttrs.clear();
        /** END EXAMPLE 1 */
    `;

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
            {select}
            </div>
            <p>Selects all rows from table that match predicate supplied.</p>
            <h2>Example from Driver</h2>
            <div className="codeBox">
            {driver}
            </div>
            <p>One of the example queries we need to create for the demo of project</p>
        </div>
        <div>
            <a href="https://github.com/xHiQuality/database-proj1" alt="link to my github" target="_blank">View the Repository (Currently Private)</a>
        </div>
    </div>
    )
}