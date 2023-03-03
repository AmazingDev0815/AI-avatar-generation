import { Fragment, useEffect, useState } from "react";
import {
  Bars3Icon,
  // BellIcon,
  Cog8ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { LocalImg } from "../components/basic/imgProvider";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { handleSignOut } from "../redux/user/user";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [authState, setAuthState] = useState(false);

  const store = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // ** Auth state (Placeholder now)
  useEffect(() => {
    if (Object.keys(store.userData).length) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, [store, dispatch]);

  const navigate = useNavigate();
  const LoginHandle = () => {
    navigate("/login");
  };

  const createAvatar = () => {
    navigate("/payment");
  };

  const handleSetting = () => {
    navigate("/setting");
  };

  const myAvatarClick = () => {
    navigate("/my-avatars");
    setNavbarOpen(false);
  };

  const settingClick = () => {
    setNavbarOpen(false);
    navigate("/setting");
  };

  const onSignOut = () => {
    dispatch(handleSignOut());
  };

  return (
    <>
      <nav className="border-gray-200 px-3 md:px-10 lg:px-20 rounded w-full">
        <div className="flex items-center justify-between">
          <div className="relative flex justify-between md:w-auto md:static md:block">
            <div className="flex justify-center items-center">
              <Link
                className="text-sm font-bold leading-relaxed contents mr-7 py-2 whitespace-nowrap "
                to="/"
              >
                <svg width="142" height="28" viewBox="0 0 212 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.16 3.61V37.91H109.17V14.33L98.4 31.53H95.98L85.21 14.33V37.91H79.27V3.61H85.21L97.19 22.55L109.17 3.61H115.16Z" fill="#140E23"/>
                  <path d="M133.96 12.98C138.16 12.98 141.78 15.2 143.04 18V13.46H148.7V37.9H143.05V33.36C141.79 36.16 138.17 38.38 133.97 38.38C126.97 38.38 121.84 32.68 121.84 25.67C121.84 18.66 126.96 12.96 133.97 12.96L133.96 12.98ZM134.41 32.79C138.56 32.79 141.51 29.55 141.51 25.69C141.51 21.83 138.56 18.59 134.41 18.59C130.26 18.59 127.21 21.83 127.21 25.69C127.21 29.55 130.21 32.79 134.41 32.79Z" fill="#140E23"/>
                  <path d="M181.11 13.46L170.77 37.9H163.91L153.57 13.46H160.24L167.34 31.67L174.49 13.46H181.11Z" fill="#140E23"/>
                  <path d="M196.03 12.98C200.23 12.98 203.85 15.2 205.11 18V13.46H210.77V37.9H205.12V33.36C203.86 36.16 200.24 38.38 196.04 38.38C189.04 38.38 183.91 32.68 183.91 25.67C183.91 18.66 189.03 12.96 196.04 12.96L196.03 12.98ZM196.48 32.79C200.63 32.79 203.58 29.55 203.58 25.69C203.58 21.83 200.63 18.59 196.48 18.59C192.33 18.59 189.28 21.83 189.28 25.69C189.28 29.55 192.28 32.79 196.48 32.79Z" fill="#140E23"/>
                  <path d="M40.01 5.28C42.16 5.28 44.09 6.39 45.17 8.26L56.45 27.79C57.53 29.66 57.53 31.88 56.45 33.75C55.37 35.62 53.44 36.73 51.29 36.73H28.73C26.58 36.73 24.65 35.62 23.57 33.75C22.49 31.88 22.49 29.66 23.57 27.79L34.85 8.26C35.93 6.39 37.86 5.28 40.01 5.28ZM40.01 0.879997C36.52 0.879997 33.03 2.61 31.04 6.06L19.76 25.59C15.77 32.5 20.76 41.13 28.73 41.13H51.29C59.26 41.13 64.25 32.5 60.26 25.59L48.98 6.06C46.99 2.61 43.5 0.879997 40.01 0.879997Z" fill="#9057FF"/>
                  <path d="M22.88 5.28C25.03 5.28 26.96 6.39 28.04 8.26L39.32 27.79C40.4 29.66 40.4 31.88 39.32 33.75C38.24 35.62 36.31 36.73 34.16 36.73H11.6C9.45002 36.73 7.52002 35.62 6.44002 33.75C5.36002 31.88 5.36002 29.66 6.44002 27.79L17.72 8.26C18.8 6.39 20.73 5.28 22.88 5.28ZM22.88 0.879999C19.39 0.879999 15.9 2.61 13.91 6.06L2.63002 25.59C-1.35998 32.5 3.63002 41.13 11.6 41.13H34.16C42.13 41.13 47.12 32.5 43.13 25.59L31.85 6.05C29.86 2.6 26.37 0.869999 22.88 0.869999V0.879999Z" fill="#9057FF"/>
                </svg>
              </Link>
            </div>
          </div>
          <div
            className={"flex items-center justify-between w-auto"}
            id="mobile menu"
          >
            <ul className="flex justify-center items-center p-4 border-gray-100 rounded-lg w-full flex-row md:space-x-8 space-x-3 xs:space-x-6 mt-0 text-sm font-medium border-0">
              {authState ? (
                <>
                  <li className="md:flex text-base font-poppinsSemiBold hidden ml-2 text-gray-700 active:text-gray-900 active:bg-primary-100 rounded-lg px-3 py-2">
                    <Link to="/my-avatars" className="pr-2">
                      My Avatars
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={createAvatar}
                      className="block w-full text-sm bg-primary-600 hover:bg-primary-700 py-2.5 px-7 rounded-lg text-white font-poppinsSemiBold"
                    >
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
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="block h-10 w-10">
                          <img
                            alt="avatar"
                            src={
                              store.userData.avatarImageUrl ??
                              LocalImg.avatarPlaceholder
                            }
                            className="rounded-full w-10 h-10"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/contact"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Contact
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )}
                                  onClick={onSignOut}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
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
                  {navbarOpen ? (
                    <XMarkIcon className="text-xl h-6 w-6 stroke-[2.5px]" />
                  ) : (
                    <Bars3Icon className="text-xl h-6 w-6 stroke-[2.5px]" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            "flex-col justify-center px-4 font-poppinsSemiBold " +
            (navbarOpen ? "flex" : "hidden")
          }
          id="menu"
        >
          <div
            className="py-9 border-b cursor-pointer hover:text-primary-600"
            onClick={myAvatarClick}
          >
            My Avatars
          </div>
          <div
            className="py-9 flex items-center cursor-pointer hover:text-primary-600"
            onClick={settingClick}
          >
            <Cog8ToothIcon className="w-5 h-5 stroke-2 mr-2" />
            Settings
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
