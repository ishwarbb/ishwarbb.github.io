import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <h1> Ishwar</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/index"> Index </Link>
                <Link to="/about"> About </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/contact"> Contact Me </Link>
            </div>
        </div>  
     );
}
 
export default NavBar;