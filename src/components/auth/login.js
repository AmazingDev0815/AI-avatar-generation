const Login = () => {
  return (
    <div className="h-screen md:flex font-poppinslight">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-900 to-primary-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-6xl font-poppinsBold ">Mava</h1>
          <p className="text-white mt-1 text-xl">Avatars made fun!</p>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-poppinsBold font-bold text-3xl mb-1">Log in</h1>
          <p className="text-base font-normal text-gray-600 mb-7">
            Welcome Back! Please enter your details.
          </p>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <span className="text-sm ml-2 font-poppinsBold hover:text-primary-700 cursor-pointer">
            Forgot Password ?
          </span>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Sign in
          </button>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Sign in with Google
          </button>
          <span className="text-sm font-poppinsBold cursor-pointer justify-center">
            Don't have an account ? <span className="hover:text-primary-700">Sign up</span> 
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
