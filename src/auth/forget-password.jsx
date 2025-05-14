import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBriefcaseBusiness, LuBuilding2 } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    console.log("Password reset requested for:", email);
    // Send reset request to backend
  };

  const StatCard = ({ icon: Icon, value, label }) => (
    <div className="text-center w-fit">
      <div className="bg-[#404c5c] w-fit p-5 rounded-lg mb-4 mx-auto">
        <Icon size={40} className="text-white" />
      </div>
      <p className="text-2xl">{value}</p>
      <p className="text-lg text-gray-400">{label}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left side */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:px-20">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <LuBriefcaseBusiness size={40} />
          <h3 className="text-3xl font-semibold">Giggle</h3>
        </Link>

        <div>
          <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
          <p className="mb-3 text-gray-500 text-sm">
            Go back to{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
          <p className="mb-6 text-gray-500 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border p-3 rounded-lg outline-gray-300 border-gray-200"
              required
            />

            <button
              type="submit"
              className="flex justify-center items-center gap-3 bg-blue-500 text-white text-lg py-4 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Reset Password <FiArrowRight />
            </button>
          </form>

          <div className="my-6 text-center text-gray-400">OR</div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="flex items-center justify-center border border-gray-200 rounded-lg px-6 py-3 gap-3 w-full"
            >
              <FaFacebookF className="text-blue-700" />
              <span>Log In with Facebook</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-gray-200 rounded-lg px-6 py-3 gap-3 w-full"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span>Log In with Google</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:block bg-[url(/register.png)] bg-cover bg-center h-full w-full">
        <div className="flex flex-col justify-end h-full bg-black/50 text-white px-10 py-12 lg:px-24">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Over 175,324 candidates</h2>
            <h2 className="text-3xl font-semibold mb-8">waiting for good employers</h2>
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
