import { Link } from "react-router-dom";
import { AnimateTo } from "./states";

const Skills = () => {
    const animationToIndex = () => {
        AnimateTo("planeMesh", "position", "index1", 0.5, 0);
        AnimateTo("planeMesh", "position", "index0", 0.5, 0.5);
    }

    return ( 
        <div className="page">
        <div className="skills">
            <h1> Skills </h1>
            <p>
                Humour/Meme expert wannabe.
                Can post a cat pic for almost any situation.
            </p>

            <Link to='/index' onClick={animationToIndex}> Back to Index </Link>
        </div>
        </div>
     );
}
 
export default Skills;