import { Link } from "react-router-dom"
const Header =() =>(
    <>
    <nav className="navStyle">
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>    
    </nav>
    </>
)
export default Header