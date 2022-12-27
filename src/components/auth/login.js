import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftSide from "../basic/authLeft";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    handleValidate();
  }

  useEffect(() => {
    if(error.email==="" && error.password === "") {
      navigate("/home");
    }
  }, [error])

  const handleValidate = () => {
    let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = password.length >= 8;
    setError({
      email: email.length ? emailValid ? "" : "Email is invalid" : "Email Field is required",
      password: password.length ? passwordValid ? "" : "Password must be at least 8 characters" : "Password Field is required"
    })
  }

  const handleGoogleLogin = () => {
    console.log("google login")
    navigate("/home");
  }
  return (
    <div className="h-screen md:flex font-poppinslight">
      <LeftSide />
      <div className="flex md:w-1/2 h-full justify-center py-10 items-center bg-white">
        <form className="bg-white w-1/2" onSubmit={handleLogin}>
          <h1 className="text-gray-800 font-poppinsBold text-3xl mb-3">
            Log in
          </h1>
          <p className="text-base font-normal text-gray-600 mb-8">
            Welcome Back! Please enter your details.
          </p>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="text"
              id="email"
              className={`border text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3.5 ${error.email ? "text-red-500 border-red-500" : "border-gray-300 text-gray-500"}`}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.email}
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`border text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3.5 ${error.password ? "text-red-500 border-red-500" : "border-gray-300 text-gray-500"}`}
              placeholder="•••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.password}
              </div>
            )}
          </div>
          <Link to="/forgot-password" className="text-sm ml-2 font-poppinsBold hover:text-primary-700 cursor-pointer">
            Forgot Password ?
          </Link>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="block w-full mt-4 py-2 rounded-lg font-poppinsRegular font-semibold mb-8 border border-gray-300"
          >
            <span className="inline-block align-middle mr-3" >
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" fill="#EA4335"></path></svg>
            </span>
            <span className="text-base">Sign in with Google</span>
            
          </button>
          <div className="text-center">
          <span className="text-sm font-poppinsRegular justify-center">
            Don't have an account ?{" "}
            <Link to="/signup" className="hover:text-primary-700 cursor-pointer font-poppinsBold">
              Sign up
            </Link>
          </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
