import { Link } from "react-router-dom";
import { AnimateTo } from "./states";

const MyIndex = () => {

    const animationtohome = () => {
        AnimateTo("camera", "position", "home1", 0.5, 0);
        AnimateTo("camera", "position", "home0", 0.5, 0.5);
    }

    const animation1 = () => {
        AnimateTo("planeMesh", "position", "index1", 0.5, 0);
        AnimateTo("planeMesh", "position", "index2", 0.5, 0.5);
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
