import { Link } from "react-router-dom";
import { AnimateTo} from "./states";

const MyHome = () => {

    const animation1 = (event) => {
        AnimateTo("camera","position","home1",0.5,0);
        AnimateTo("camera","position","home2",0.5,0.5);
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