// import { useState } from "react";
import { BellIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
// import { Menu } from "@headlessui/react";

const Header = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false)
  const navigate = useNavigate();
  const login = true;
  const LoginHandle = () => {
    navigate("/login");
  };

  const createAvatar = () => {
    navigate("/login");
  }

  return (
    <>
      <nav className="border-gray-200 px-5 sm:px-10 md:px-20 rounded w-full">
        <div className="flex items-center justify-between">
          <div className="relative flex justify-between md:w-auto md:static md:block">
            <div className="flex justify-center items-center">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-7 py-2 whitespace-nowrap "
                to="/"
              >
                <h1 className="text-3xl font-poppinsSemiBold text-primary-600">
                  Mava
                </h1>
              </Link>
              {login && (
                <div className="md:flex hidden">
                  <a href="#" className="pr-2">
                    My Avatars
                  </a>
                </div>
              )}
            </div>

            {/* <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> */}
          </div>
          {/* <div className={
              "md:flex items-center justify-between w-full md:w-auto" +
              (navbarOpen ? " flex" : " hidden")
            }>
              <div className="flex flex-col justify-center items-center mt-4 border border-gray-100 rounded-lg bg-gray-50 w-full md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <a href="#" className="pr-2">
                  Avatars
                </a>
                <a href="#" className="">
                  Packs
                </a>
              </div>
          </div> */}
          <div
            className={
              "flex items-center justify-between w-auto"
              // (navbarOpen ? " flex" : " hidden")
            }
            id="mobile menu"
          >
            <ul className="flex justify-center items-center p-4 border-gray-100 rounded-lg w-full flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
              {login ? (
                <>
                  <li>
                    <button onClick={createAvatar} className="block w-full text-sm bg-primary-600 hover:bg-primary-700 py-2.5 px-7 rounded-lg text-white font-poppinsSemiBold">
                      Create
                    </button>
                  </li>
                  <li className="md:flex hidden">
                    <button className="block">
                      <BellIcon className="w-[20px] h-[20px] text-gray-700 hover:text-primary-600 " />
                    </button>
                  </li>
                  <li className="md:flex hidden">
                    <button className="block">
                      <Cog8ToothIcon className="w-[20px] h-[20px] text-gray-700 hover:text-primary-600 " />
                    </button>
                  </li>
                  <li>
                    <button className="block h-10 w-10">
                      <img
                        alt="avatar"
                        src={require("../assets/img/3.png")}
                        className="rounded-full"
                      />
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    className="block w-full text-sm bg-primary-600 hover:bg-primary-700 py-2.5 px-7 rounded-lg text-white font-poppinsSemiBold"
                    onClick={LoginHandle}
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
