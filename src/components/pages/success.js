import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";
import { LocalImg } from "../basic/imgProvider";

const Success = () => {
  const navigate = useNavigate();
  const goMyAvatar = () => {
    navigate("/my-avatars");
  };
  return (
    <MainLayout>
      <div className="flex flex-1 flex-col justify-center items-center mb-20 p-5">
        <img src={LocalImg.success} alt="success" className="w-32 h-32" />
        <h1 className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center">
          Just a little more...{" "}
        </h1>
        <div
          className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center w-4/5"
          id="support_text"
        >
          <span>
            Congratulations! Your profile pictures have been successfully
            submitted.
          </span>
          <span>
            Thank you for choosing our AI Avatar Service! We appreciate your interest and are excited to create a personalized avatar for you. Due to the complexity of our AI models, it takes time to train and generate the images. On average, you can expect a wait time of approximately <span className="font-poppinsSemiBold">1 hour to 1 hour and 30 minutes</span> for your avatar to be ready, you´ll receive a email once ready.
          </span>
          <span>
            We appreciate your understanding and patience as our advanced algorithms work to create a unique and high-quality avatar for you. If you haven't received your generated avatar after 2 hours, please don't hesitate to reach out to our support team at info@mava.fun . We'll be more than happy to assist you and ensure you receive your avatar promptly.
          </span>
          <span>Thank you for choosing our service!</span>
        </div>
        <button
          className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm"
          onClick={goMyAvatar}
        >
          Go to My Avatars
        </button>
      </div>
    </MainLayout>
  );
};

export default Success;
