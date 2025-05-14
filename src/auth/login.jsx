import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBriefcaseBusiness, LuBuilding2 } from "react-icons/lu";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const StatCard = ({ icon: Icon, value, label }) => (
    <div className="text-center w-fit">
      <div className="bg-[#404c5c] w-fit p-5 rounded-lg mb-4 mx-auto">
        <Icon size={40} className="text-white" />
      </div>
      <p className="text-xl md:text-2xl">{value}</p>
      <p className="text-sm md:text-lg text-gray-400">{label}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left side */}
      <div className="flex flex-col justify-evenly px-6 md:px-10 py-6 pt-10 md:pt-0">
        <Link to="/" className="flex items-center gap-2 mb-10 md:mb-0">
          <LuBriefcaseBusiness size={40} />
          <h3 className="text-3xl font-semibold">Giggle</h3>
        </Link>

        <div>
          <h1 className="text-3xl font-bold mb-5">Log In</h1>
          <p className="mb-6 text-gray-400 text-sm md:text-base">
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
              className="border p-3 rounded-lg outline-gray-300 border-gray-200 w-full"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border p-3 rounded-lg w-full pr-10 outline-gray-300 border-gray-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-600 gap-2 sm:gap-0">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-blue-500"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center gap-4 bg-blue-500 text-lg md:text-xl text-white py-4 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer"
            >
              Log In <FiArrowRight className="w-5 h-5" />
            </button>
          </form>

          <h4 className="my-8 text-gray-400 text-center text-sm md:text-base">OR</h4>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center border border-gray-200 rounded-lg px-6 py-3 gap-3 w-full">
              <FaFacebookF className="text-blue-700" />
              <p className="text-sm md:text-base">Log In with Facebook</p>
            </button>
            <button className="flex items-center justify-center border border-gray-200 rounded-lg px-6 py-3 gap-3 w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <p className="text-sm md:text-base">Log In with Google</p>
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:block bg-[url(/register.png)] bg-cover bg-center h-full w-full">
        <div className="grid items-end pb-48 h-full bg-black/50 text-white px-6 lg:px-32">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium mb-2">
              Over 175,324 candidates
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium mb-10">
              waiting for good employers
            </h1>

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
