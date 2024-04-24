import "../../css/projecthighlight.css";

export default function WorkoutTracker() {

    const frontend = `
    const Workout = (props, key) => {
        const [isFormVisible, setIsFormVisible] = useState(false);
      
        const showFormHandler = () => {
          setIsFormVisible(true)
        }
        
        const closeFormHandler = () => {
          setIsFormVisible(false)
        }
      
        const navigate = useNavigate();
        const deleteHandler = (id) => {
          console.log(id);
          axios
            .delete(http://localhost:4000/api/exercises/{props.id})
            .then((res) => {
              navigate('/user-auth');
            })
            .catch((err) => {
              console.log("Error from Workout Delete click");
            });
            window.location.reload()
        };
        
        return (
          <Card className="custom-card">
             <Card.Img
              variant="top"
              src={props.image}
              className="card-image"
            />
            
            <Card.Body>
              <li key={key} className="user-item">
              <img src={props.img} alt=''></img>
                <Card.Title>Exercise: {props.exercise}</Card.Title>
                <Card.Text>
                  <h3>Workout: {props.workout}</h3>
                  <h3>Calories: {props.calories}</h3>
                  
                  {window.location.pathname === '/user-auth' && (
                    <div className="button-container">
                 
      
                        <button type="submit" className="edit-button" onClick={showFormHandler}>Edit</button>
                        
                
                        <button type='submit' className='delete-button' onClick={() => { deleteHandler(props.id)}}>
                          Delete
                        </button>
                      
                    </div>
                  )}
                  
                </Card.Text>
              </li>
            </Card.Body>
            {isFormVisible && <EditFormExercise id={props.id} name={props.name} workout={props.workout} calories={props.calories} img={props.img}/>}
            {isFormVisible && <button id="go-back" onClick={closeFormHandler}>Go Back</button>}
          </Card>
          
        );
      };
      
      export default Workout;
    `;

    const backend = `
    useEffect(() => {
        axios
          .get('http://localhost:4000/api/foods')
          .then((res) => {
            setFoods(res.data);
          })
          .catch((err) => {
            console.log(err)
          });
     }, []);
     
     useEffect(() => {
        axios
          .get('http://localhost:4000/api/exercises')
          .then((res) => {
            setExercises(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);
    `;

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
                {frontend}
                </div>
                <p>This function creates a workout card to be display on the users main page.</p>
                <h2>Some Backend Code</h2>
                <div className="codeBox">
                {backend}
                </div>
                <p>Some axios statements that showcase the useEffect() Hook</p>
            </div>
            <div>
                <a href="https://github.com/xHiQuality/Workout-Tracker-REACT" alt="link to the project" target="_blank">View the Repository</a>
            </div>
        </div>
    )
}



