import { Link } from "react-router-dom";
import gsap from "gsap";
import { camera, controls } from "./background";

const MyHome = () => {
    
    var initCam = camera.position;
    const constInitCam = initCam;

    const animation1 = (event) => {
        console.log("event = ",event)
        gsap.to(initCam, { x : constInitCam.x, y : constInitCam.y  , z :constInitCam.z +5  ,
            onUpdate: () => {
                camera.position.set( initCam.x, initCam.y, initCam.z)      
                controls.update();
              },
              duration: 0.5
          })

        // controls.update();

        // initCam = { x : initCam.x, y : initCam.y , z :initCam.z + 5}

        gsap.to(initCam, { x : initCam.x , y : initCam.y + 10 , z :initCam.z -3,
            onUpdate: () => {
                camera.position.set( initCam.x, initCam.y, initCam.z)
                controls.update();
              },
              duration: 0.5,
              delay : 0.5
          })

        
    }

    return ( 
        <div className="page">
        <div className="Home">
            <h1> Ishwar Balappanawar </h1>
            <p>
                Hey All! Welcome to my personal website
            </p>
            <div className="Button">
            <Link to="/index" onClick={(event) => animation1(event)} >Index </Link>
            </div>
        </div>
        </div>
     );
}
 
export default MyHome;