import { Link } from "react-router-dom";
import { planeMesh, controls } from "./background";
import gsap from "gsap";

const About = () => {

    const animationToIndex = () => {
        var initMesh = planeMesh.position;
        const constinitMesh = initMesh;

            gsap.to(initMesh, { x : constinitMesh.x, y : constinitMesh.y  , z :constinitMesh.z - 51 ,
                onUpdate: () => {
                    planeMesh.position.set( initMesh.x, initMesh.y, initMesh.z)      
                    controls.update();
                  },
                  duration: 0.5
              })
              
            gsap.to(initMesh, { x : constinitMesh.x , y : constinitMesh.y , z :constinitMesh.z -15 ,
                onUpdate: () => {
                    planeMesh.position.set( initMesh.x, initMesh.y, initMesh.z)
                    controls.update();
                  },
                  duration: 0.5,
                  delay : 0.5
              })
        }

    return ( 
        <div className="page">
        <div className="about">
            <div className="whoami">
                <h1>
                    Who Am I?
                </h1>
                <p>
                    Hey! I'm Ishwar B, a first year student at IIIT
                    Hyderabad, pursuing B.Tech in Computer Science
                    and Engineering. I'm from Bangalore. I love
                    sports, magic, math, solving puzzles and coding, but most
                    of all, I love learning new things. Also I love doing
                    crazy stuff.
                </p>
            </div>
            <div className="education">
                <h1>
                    Educational Background
                </h1>
                <p>
                    My educational background is so boring OMG.
                    <h4>
                        Bachelor of Technology
                    </h4>
                    <p> 
                        Board: Central Board of Secondary Education
                    </p>
                    <h4>
                        Senior Secondary School Certificate
                    </h4>
                    <h4>
                        Secondary School Certificate
                    </h4>
                </p>
            </div>

            <Link to='/index' onClick={animationToIndex}> Back to Index </Link>
        </div>
        </div>
     );
}
 
export default About;