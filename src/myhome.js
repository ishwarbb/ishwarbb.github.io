import { Link } from "react-router-dom";
import gsap from "gsap";
import { camera, controls } from "./background";

const MyHome = () => {
    
    var initCam = {x : -0.7278575092282116, y : -8.496655387373522,z : 3.974732456635354};

    const animation1 = (event) => {
        console.log("event = ",event)
        gsap.to(initCam, { x : initCam.x, y : initCam.y , z :initCam.z + 5,
            onUpdate: () => {
                camera.position.set( initCam.x, initCam.y, initCam.z)
                controls.onUpdate();
              },
              duration: 1
          })

        // initCam = { x : initCam.x, y : initCam.y , z :initCam.z + 5}

        // gsap.to(initCam, { x : initCam.x , y : initCam.y + 15 , z :initCam.z,
        //     onUpdate: () => {
        //         camera.position.set( initCam.x, initCam.y, initCam.z)
        //         controls.onUpdate();
        //       },
        //       duration: 1,
        //       delay : 1
        //   })

        
    }

    return ( 
        <div className="Home">
            <h1> Ishwar Balappanawar </h1>
            <p>
                Hey All! Welcome to my personal website
            </p>
            <div className="Button">
            <Link to="/index" onClick={(event) => animation1(event)} >Index </Link>
            </div>
        </div>
     );
}
 
export default MyHome;