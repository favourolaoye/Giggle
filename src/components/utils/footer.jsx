import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex bg-black flex-col w-full">
            <div className="flex w-[90%] justify-center">
                <div className="grid grid-cols-5 gap-5 bg-white ">
                    <div className="">
                        <h3 className="text-2xl font-semibold">Giggle</h3>
                        <p>070-2680-5260</p>
                        <p>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                    </div>

                    <div className="flex flex-col">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/jobs">Jobs</Link>
                    </div>
                    <div className="">
                        <h3>Candidate</h3>
                    </div>
                    <div className="">
                        <h3>Employee</h3>
                    </div>
                    <div className="">
                        <h3>Support</h3>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full bg-white">
                <p className="">&copy; {currentYear} Giggle - Job Portal. All rights Reserved</p>
                <div className="flex">
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </footer>
    )
}
