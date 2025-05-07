import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex bg-black w-full justify-center">
            <div className="flex flex-col w-[90%]">
                <div className="grid grid-cols-5 gap-8 text-white p-8">
                    <div className="text-sm/8">
                        <h3 className="text-2xl font-semibold mb-5">Giggle</h3>
                        <p>070-2680-5260</p>
                        <p className="text-sm/8">6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                    </div>

                    <div className="flex flex-col text-sm/8">
                        <h3 className="text-base font-medium mb-[20px]">Quick Links</h3>
                        <Link to="/">About</Link>
                        <Link to="/about">Contact</Link>
                        <Link to="/contact">Pricing</Link>
                        <Link to="/jobs">Blog</Link>
                    </div>
                    <div className="flex flex-col text-sm/8">
                        <h3 className="text-base font-medium mb-[20px]">Candidate</h3>
                        <Link >Browse Jobs</Link>
                        <Link>Browse Employers</Link>
                        <Link>Candidated Dashboard</Link>
                        <Link>Saved Jobs</Link>
                    </div>
                    <div className="flex flex-col text-sm/8">
                        <h3 className="text-base font-medium mb-[20px]">Employee</h3>
                        <Link>Post a Job</Link>
                        <Link>Browse Employees</Link>
                        <Link>Employee Dashboard</Link>
                        <Link>Applications</Link>
                    </div>
                    <div className="flex flex-col text-sm/8">
                        <h3 className="text-base font-medium mb-[20px]">Support</h3>
                        <Link>Faqs</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Terms of Service</Link>
                    </div>
                </div>
           

            <div className="flex justify-between w-full text-white p-5">
                <p className="">&copy; {currentYear} Giggle - Job Portal. All rights Reserved</p>
                <div className="flex gap-5">
                  <Link to=""> <FaFacebookF /></Link> 
                  <Link to=""> <FaYoutube /> </Link>
                   <Link to=""> <FaInstagram/> </Link>
                  <Link to=""> <FaTwitter /></Link>
                </div>
            </div> 
        </div>
        </footer>
    )
}
