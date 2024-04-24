import '../../css/projecthighlight.css';
import FileInput from "../../utility/fileInput";

export default function RedditClone() {
    const backendReddit = `
    exports.create = (req,res) => {
        //Validate request
         if (!req.body.username) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        } else if (!req.body.password) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        //Create a user
          const user = {
            iduser: req.body.iduser,
            username: req.body.username,
            password: req.body.password,
            accountImage: req.body.accountImage
          };
          
          //Save User in the database
          User.create(user)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User"
            });
          });
        };
        
        //Retreive all Users from the database
        exports.findAll = (req,res) => {
            const iduser = req.query.iduser;
            var condition = iduser ? {iduser: {[Op.like]: %{iduser}}} : null;
        
            User.findAll({where : condition})
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving users"
                    })
                })
        };
    `;

    const frontendReddit = `
    ...
{isOpen && (
        <div className="auth-modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="login-page-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="login-page-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="login-page-button" type="submit">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>
            {isSignUp ? (
              <p>Already have an account? <a href="#" onClick={handleSignInClick}>Log In</a></p>
            ) : (
              <p>New to Reddit? <a href="#" onClick={handleSignUpClick}>Sign Up</a></p>
            )}
            {userExists && <p>User already exists!</p>}
          </div>
        </div>
      )}
      ...
    `;

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
                {backendReddit}
                </div>
                <p>Code showcases how to create and add a user to database. As well as method for finding all users.</p>
                <h2>Some Frontend Code</h2>
                <div className="codeBox">
                {frontendReddit}
                </div>
                <p>Code for SignUp/Login Prompt for user</p>
            </div>
            <div>
                <a href="https://github.com/xHiQuality/4050project" alt="link to my github" target="_blank">View the Repository</a>
            </div>
        </div>
    )
}