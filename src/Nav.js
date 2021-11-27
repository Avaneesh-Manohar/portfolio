import './Nav.css'
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <div className="Nav">
            <div className="Logo">
                <h1>Avaneesh <span> Manohar</span></h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Nav