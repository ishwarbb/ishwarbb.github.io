import { Link } from "react-router-dom";

const ContactMe = () => {
    return ( 
     <div className="page">
        <div className="contact">
            <h1> So many ways to get in touch </h1>
            <p> Here are some major ones</p>
            <div className="contactlinks">
                <Link onClick={() => { window.location.replace('https://www.instagram.com/ishwarb_0238/') }}>
                     Instagram </Link>
                <Link onClick={() => { window.location.replace('https://www.facebook.com/ishwar.balappanawar/') }}>
                     Facebook </Link>
                <Link onClick={() => { window.location.replace('https://github.com/ishwarbb') }}>
                     GitHub </Link>
                <Link onClick={() => { window.location.replace('https://www.linkedin.com/in/ishwar-balappanawar-794332254/') }}>
                     Linkedin </Link>
            </div>
            <div className="dummy">
                <Link to='/index'> Back to Index </Link>
            </div>
        </div>
     </div>
     );
}
 
export default ContactMe;