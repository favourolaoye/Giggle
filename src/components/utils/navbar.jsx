import { LuBriefcaseBusiness } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const links = [
        {id: 1, name: "Home", path: "/" },
        {id: 2, name: "About", path: "/about" },
        {id: 3, name: "Contact", path: "/contact" },
        {id: 4, name: "Login", path: "/login" },
        {id: 5, name: "Sign Up", path: "/signup" },
    ]

    return (
        <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <nav className="flex justify-between items-center w-[90%] mx-auto p-4">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <LuBriefcaseBusiness size={30} />
                    <h3 className="font-main text-xl font-semibold">Giggle</h3>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 items-center">
                   {links.map((link) => (
                        <Link key={link.id} to={link.path} className="text-base hover:text-blue-500 hover:font-semibold">
                            {link.name}
                        </Link>
                    ))
                }
                 
                </div>

                {/* Auth Buttons (Desktop) */}
                <div className="hidden md:flex gap-4">
                    <Link to="/login" className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded-lg text-center">Login</Link>
                    <Link to="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg text-center">Sign Up</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black text-3xl">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white w-full px-6 pb-4 flex flex-col gap-4 h-[100vh]">
                    <Link to="/" className="text-base font-semibold hover:text-blue-500">Home</Link>
                    <Link to="/about" className="text-base hover:text-blue-500">About</Link>
                    <Link to="/contact" className="text-base hover:text-blue-500">Contact</Link>
                    <Link to="/login" className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded-lg text-center">Login</Link>
                    <Link to="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg text-center">Sign Up</Link>
                </div>
            )}
        </div>
    );
}
