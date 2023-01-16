import { useState } from "react";
import { Bars3Icon, BellIcon, Cog8ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
// import { Menu } from "@headlessui/react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navigate = useNavigate();
  const login = true;
  const LoginHandle = () => {
    navigate("/login");
  };

  const createAvatar = () => {
    navigate("/login");
  }

  const handleSetting = () => {
    navigate("/setting");
  }
  
  const myAvatarClick = () => {
    console.log('myAvatar')
    setNavbarOpen(false)
  }

  const settingClick = () => {
    setNavbarOpen(false);
    navigate("/setting")
  }

  return (
    <>
      <nav className="border-gray-200 px-3 md:px-10 lg:px-20 rounded w-full">
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
                  <Link to="/my-avatars" className="pr-2">
                    My Avatars
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div
            className={
              "flex items-center justify-between w-auto"
            }
            id="mobile menu"
          >
            <ul className="flex justify-center items-center p-4 border-gray-100 rounded-lg w-full flex-row md:space-x-8 space-x-3 xs:space-x-6 mt-0 text-sm font-medium border-0 bg-white">
              {login ? (
                <>
                  <li>
                    <button onClick={createAvatar} className="block w-full text-sm bg-primary-600 hover:bg-primary-700 py-2.5 px-7 rounded-lg text-white font-poppinsSemiBold">
                      Create
                    </button>
                  </li>
                  {/* <li className="md:flex hidden">
                    <button className="block" >
                      <BellIcon className="w-5 h-5 text-gray-700 hover:text-primary-600 " />
                    </button>
                  </li> */}
                  <li className="md:flex hidden">
                    <button className="block" onClick={handleSetting}>
                      <Cog8ToothIcon className="w-5 h-5 text-gray-700 hover:text-primary-600 " />
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
              <li>            
                <button
                  className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {navbarOpen ? <XMarkIcon className="text-xl h-6 w-6 stroke-[2.5px]" /> : <Bars3Icon className="text-xl h-6 w-6 stroke-[2.5px]" />}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={"flex-col justify-center px-4 font-poppinsSemiBold " + (navbarOpen ? "flex" : "hidden")} id="menu">
          <div className="py-9 border-b cursor-pointer hover:text-primary-600" onClick={myAvatarClick}>My Avatars</div>
          <div className="py-9 flex items-center cursor-pointer hover:text-primary-600" onClick={settingClick}><Cog8ToothIcon className="w-5 h-5 stroke-2 mr-2" />Settings</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
