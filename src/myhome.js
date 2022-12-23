import { Link} from "react-router-dom";

const MyHome = () => {

    return ( 
        <div className="Home">
            <h1> Ishwar Balappanawar </h1>
            <p>
                Hey All! Welcome to my personal website
            </p>
            <div className="Button">
            <Link to="/index"  >Index </Link>
            </div>
        </div>
     );
}
 
export default MyHome;