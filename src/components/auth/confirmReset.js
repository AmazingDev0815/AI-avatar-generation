import LeftSide from "../../layout/authLeft";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/user/user";

const ConfirmReset = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);
  return (
    <div className="min-h-screen md:flex md:justify-center md:items-center font-poppinslight">
      <LeftSide />
      <div className="flex md:w-1/2 min-h-screen justify-center py-10 items-center bg-white">
        <form className="bg-white w-2/3 lg:w-1/2" onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <div className="bg-success-100 rounded-full p-2">
              <div className="bg-success-200 rounded-full p-2">
                <CheckCircleIcon className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 font-poppinsSemiBold text-center text-3xl mb-3">
            Password reset
          </h1>
          <p className="text-base font-normal text-center text-gray-600 mb-8">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-poppinsSemiBold mb-2"
          >
            Back to login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmReset;
