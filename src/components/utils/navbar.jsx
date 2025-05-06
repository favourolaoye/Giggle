import { LuBriefcaseBusiness } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
export default function Navbar() {
  return (
    <div className="navigation">
        <nav>
            <div className="logo">
                <LuBriefcaseBusiness/>
                <h3>Giggle</h3>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="btns">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </div>
        </nav>
    </div>
  )
}
