import { Link } from "react-router-dom";

const MyIndex = () => {
    return ( 
        <div className="page">
        <div className="myindex">
            <Link to='/'> Home </Link>
            <Link to='/index'> Index </Link>
            <Link to='/about'> About </Link>
            <Link to='/skills'> Skills </Link>
            <Link to='/contact'> Contact Me </Link>
        </div>
        </div>
     );
}
 
export default MyIndex;
