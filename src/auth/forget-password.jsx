import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBriefcaseBusiness, LuBuilding2 } from "react-icons/lu";
import {FiArrowRight } from "react-icons/fi";
import { FaFacebookF  } from "react-icons/fa";



export default function ForgetPassword() {
  const [email, setEmail] = useState("");

    //Right Side Icons
  
const StatCard = ({ icon: IconComponent, value, label }) => (
  <div className="text-center w-fit">
    <div className="bg-[#404c5c] w-fit p-5 rounded-lg mb-4 mx-auto">
      <IconComponent size={40} className="text-white" />
    </div>
    <p className="text-2xl">{value}</p>
    <p className="text-lg text-gray-400">{label}</p>
  </div>
);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative pl-32">
      

      {/* Left side */}
      <div className="flex flex-col justify-evenly px-10 py-6">
        {/* Logo at top-left */}
        <Link to="/" className="flex items-center gap-2">
            <LuBriefcaseBusiness size={50} />
            <h3 className="text-4xl font-semibold">Giggle</h3>
        </Link>
        <div className="mt-16">
          <h1 className="text-3xl font-bold mb-8">Forgot Password</h1>
          <p className="mb-3 text-gray-400">
            Go back to{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
          <p className="mb-6 text-gray-400">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>

          <form className="flex flex-col gap-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border p-3 rounded-lg outline-gray-300 border-gray-200"
            />

            <button
              type="submit"
              className="flex justify-center items-center gap-4 bg-blue-500 text-xl text-white py-5 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer"
            >
              Reset Password <FiArrowRight className="w-5 h-5"/>
            </button>
          </form>
          <h4 className="my-8 text-gray-400 text-center">OR</h4>
          <div className="flex gap-10">
            <button className="flex items-center border border-gray-200 rounded-lg flex-1 px-20 py-3 gap-3 ">
                <FaFacebookF className="text-blue-700"/>
                <p>Log In with Facebook</p>
            </button>
            <button className="flex items-center border border-gray-200 rounded-lg flex-1 px-20 py-3 gap-3">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google logo"
                className="w-5 h-5"
                />
                <p>Log In with Google</p>
            </button>

          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:block bg-[url(/register.png)] bg-cover bg-center h-full w-full">
      <div className="grid items-end pb-48 h-full bg-black/50 text-white px-10 lg:px-32">
        <div>
          <h1 className="text-3xl font-medium mb-2">Over 175,324 candidates</h1>
          <h1 className="text-3xl font-medium mb-10">waiting for good employers</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard icon={LuBriefcaseBusiness} value="175,324" label="Live Jobs" />
            <StatCard icon={LuBuilding2} value="97,354" label="Companies" />
            <StatCard icon={LuBriefcaseBusiness} value="7,532" label="New Jobs" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
