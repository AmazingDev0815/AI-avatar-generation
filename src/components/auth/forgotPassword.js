import { Link, useNavigate } from "react-router-dom";
import LeftSide from "../../layout/authLeft";
import { ArrowLeftIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { requestResetPassword } from "../../redux/user/user";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidate();
  };

  useEffect(() => {
    if (
      Object.keys(store.error).length &&
      store.error?.message === "ENTITY_NOT_FOUND"
    ) {
      setError({ resetPasswordError: "Email is incorrect. Please try again" });
    }
  }, [store]);

  useEffect(() => {
    if (error.email === "") {
      const prefixUri = window.location.origin;
      dispatch(requestResetPassword({ email, prefixUri }));
    }
    if (store.response?.success) {
      navigate("/check-email");
    }
  }, [error, navigate, store, dispatch, email]);

  const handleValidate = () => {
    let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    setError({
      email: email.length
        ? emailValid
          ? ""
          : "Email form is invalid"
        : "Email Field is required",
    });
  };
  return (
    <div className="min-h-screen md:flex md:justify-center md:items-center font-poppinslight">
      <LeftSide />
      <div className="flex md:w-1/2 min-h-screen justify-center py-10 items-center bg-white">
        <form className="bg-white w-2/3 lg:w-1/2" onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <div className="bg-primary-50 rounded-full p-2">
              <div className="bg-primary-100 rounded-full p-2">
                <KeyIcon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 font-poppinsSemiBold text-center text-3xl mb-3">
            Forgot Password?
          </h1>
          <p className="text-base font-normal text-center text-gray-600 mb-8">
            No worries, we'll send you reset instructions.
          </p>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`border text-base rounded-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-full py-2.5 px-3.5 ${
                error.email
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-500"
              }`}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.email}
              </div>
            )}
          </div>
          {error.resetPasswordError && (
            <div className="font-poppinsMedium mt-2 text-red-500">
              {error.resetPasswordError}
            </div>
          )}
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-poppinsSemiBold mb-2"
          >
            Reset Password
          </button>
          <div className="text-center mt-8">
            <Link
              to="/login"
              className="text-sm font-poppinsSemiBold justify-center flex"
            >
              <ArrowLeftIcon className="w-3 align-middle mr-2" />
              <span>Back to log in</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
