import MainLayout from "../../layout/mainLayout";

const Success = () => {
  return (
    <MainLayout>
      <div className="flex flex-1 flex-col justify-center items-center mb-[200px]">
        <img src={require('../../assets/img/success.gif')} alt="success" className="w-32 h-32"/>
        <h1 className="font-poppinsBold text-5xl text-gray-900 mt-3 text-center">Just a little more... </h1>
        <div className="flex flex-col text-base text-gray-600 mt-6 text-center" id="support_text">
          <span>Congratulations! Your profile pictures have been successfully submitted.</span>
          <span>Our AI engine is now creating new avatars. Once they are ready, we will send you an email notification.</span>
          <span>Thank you for choosing our service!</span>
        </div>
        <button className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm">Go to My Avatars</button>
      </div>
    </MainLayout>
  )
}

export default Success;