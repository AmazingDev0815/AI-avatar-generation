import { useNavigate } from "react-router-dom";
import { LocalImg } from "../basic/imgProvider";

const NotCreated = () => {

  const navigate = useNavigate();

  const create = () => {
    navigate("/payment");
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center mb-40 p-5">
      <img
        src={LocalImg.pensive}
        alt="Don't have any avatars"
        className="w-32 h-32"
      />
      <h1 className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center">
        Nothing created yet...
      </h1>
      <div
        className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center"
        id="support_text"
      >
        <span>You don’t have any avatars created yet.</span>
        <span>
          Let’s sort that out. Click on the Create button to get started!
        </span>
      </div>
      <button onClick={create} className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm">
        Create
      </button>
    </div>
  );
};

export default NotCreated;
