import { useNavigate } from "react-router-dom";
import { LocalImg } from "../basic/imgProvider";
import MainLayout from "../../layout/mainLayout";

export default function PageNotFound() {

  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  }

  return (
    <MainLayout>
      <div className="flex flex-1 flex-col justify-center items-center mb-40 p-5">
        <img
          src={LocalImg.pensive}
          alt="Don't have any avatars"
          className="w-32 h-32"
        />
        <h1 className="font-poppinsBold text-3xl md:text-4xl text-gray-900 mt-3 text-center">
          404 Page Not Found
        </h1>
        <div
          className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center"
          id="support_text"
        >
          <span>This is not the web page you are looking for...</span>
        </div>
        <button onClick={home} className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm">
          Go to Homepage
        </button>
      </div>
    </MainLayout>
  );
};

