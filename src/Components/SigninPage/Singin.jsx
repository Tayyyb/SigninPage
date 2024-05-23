import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex min-h-screen">
      {/* Sign In Section */}
      <div className="flex items-center justify-center w-1/2 bg-white">
        <div className="w-[350px]   mb-20 text-left  ">
          <h1 className="text-2xl font-bold text-red-700">Sign In</h1>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Enter your email and password to Sign in!
              </label>
              <div className="flex items-center justify-center py-5 relative">
                <hr className="w-full border-gray-300" />
                <span className="absolute text-gray-500 bg-white px-2">or</span>
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="abcd@gmail.com"
                name="email"
                className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Mn.@5h257"
                  name="password"
                  className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  style={{ accentColor: "red" }}
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Keep me logged in
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Forget password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-sm text-left text-gray-600">
            Not registered yet?{" "}
            <a href="#" className="font-medium text-red-600 hover:text-red-500">
              Create an account
            </a>
          </p> 
        </div>
       
      </div>

      {/* Second Section */}
      <div className="flex items-center justify-center w-1/2 bg-white-600">
        <div className="relative w-[965px] h-[820px] border-[2.2px] border-[#FFFFFF33] bg-gradient-to-br from-[#e52340] to-[#ce0b3c] rounded-bl-[200px]">
          
        </div>
      </div>
    </div>
  );
}

export default Signin;
