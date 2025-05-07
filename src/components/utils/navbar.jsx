import { LuBriefcaseBusiness } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center w-full bg-white shadow-md">
        <nav className="flex justify-between items-center w-[90%] p-4">
            <div className="flex items-center gap-2">
                <LuBriefcaseBusiness/>
                <h3>Giggle</h3>
            </div>
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="flex gap-4">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </div>
        </nav>
    </div>
  )
}
