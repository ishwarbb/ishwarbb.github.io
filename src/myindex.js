import { Link } from "react-router-dom";
import gsap from "gsap";
import { planeMesh, controls, camera } from "./background";

const MyIndex = () => {

    var initMesh = planeMesh.position;
    const constinitMesh = initMesh;
    var initCam = camera.position;
    const constInitCam = initCam;

    const animationtohome = () => {

        gsap.to(initCam, { x : 0, y : constInitCam.y , z :constInitCam.z  - 5  ,
            onUpdate: () => {
                camera.position.set( initCam.x, initCam.y, initCam.z)      
                controls.update();
              },
              duration: 0.5
          })

        gsap.to(initCam, { x : constInitCam.x , y : constInitCam.y -10 , z :constInitCam.z - 5 ,
            onUpdate: () => {
                camera.position.set( initCam.x, initCam.y, initCam.z)
                controls.update();
              },
              duration: 0.5,
              delay : 0.5
          })
    }

    const animation1 = () => {

        gsap.to(initMesh, { x : constinitMesh.x, y : constinitMesh.y  , z :constinitMesh.z - 45 ,
            onUpdate: () => {
                planeMesh.position.set( initMesh.x, initMesh.y, initMesh.z)      
                controls.update();
              },
              duration: 0.5
          })
          
        gsap.to(initMesh, { x : constinitMesh.x , y : constinitMesh.y , z :constinitMesh.z + 6 ,
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
        <div className="myindex">
            <Link to='/' onClick={animationtohome}> Home </Link>
            <Link to='/index' onClick={animation1}> Index </Link>
            <Link to='/about' onClick={animation1}> About </Link>
            <Link to='/skills' onClick={animation1}> Skills </Link>
            <Link to='/contact' onClick={animation1}> Contact Me </Link>
        </div>
        </div>
     );
}
 
export default MyIndex;
