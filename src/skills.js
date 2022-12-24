import { Link } from "react-router-dom";

const Skills = () => {
    return ( 
        <div className="page">
        <div className="skills">
            <h1> Skills </h1>
            <p>
                Humour/Meme expert wannabe.
                Can post a cat pic for almost any situation.
            </p>

            <Link to='/index'> Back to Index </Link>
        </div>
        </div>
     );
}
 
export default Skills;