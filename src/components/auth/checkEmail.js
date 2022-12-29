import { Link, useNavigate } from "react-router-dom";
import LeftSide from "../../layout/authLeft";
import { ArrowLeftIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const CheckEmail = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="h-screen md:flex font-poppinslight">
      <LeftSide />
      <div className="flex md:w-1/2 h-full justify-center py-10 items-center bg-white">
        <form className="bg-white w-2/3 lg:w-1/2" onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <div className="bg-primary-50 rounded-full p-2">
              <div className="bg-primary-100 rounded-full p-2">
                <EnvelopeIcon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 font-poppinsBold text-center text-3xl mb-3">
            Check your email
          </h1>
          <p className="text-base font-normal text-center text-gray-600 mb-8">
            We sent a password reset link to marko@gmail.com
          </p>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-poppinsBold mb-8"
          >
            Open email app
          </button>
          <div className="text-center">
            <span className="text-sm font-poppinsRegular justify-center">
              Didn’t receive the email ?{" "}
              <Link
                to="/forgot-password"
                className="hover:text-primary-700 cursor-pointer font-poppinsBold"
              >
                Click to resend
              </Link>
            </span>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/login"
              className="text-sm font-poppinsBold justify-center flex"
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

export default CheckEmail;
