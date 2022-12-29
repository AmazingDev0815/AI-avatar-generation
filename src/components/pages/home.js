import MainLayout from "../../layout/mainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="px-10 flex-1 flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="flex flex-col w-full lg:w-1/2 md:p-20 p-10" id="supporting_head">
          <h1 className="text-gray-900 font-poppinsBold text-5xl leading-normal mb-6">
            Firstly, you need to{" "}
            <span className="text-primary-600">Avatar up!</span>
          </h1>
          <div className="text-gray-600" id="supporting_text">
            <p className="mb-6">Introducing a new and unique way to transform You or your loved ones
            into beautiful art! With just a few simple steps, you can create a
            one-of-a-kind images that are perfect for spicing up your social
            media profile picture, gifting to a friend, or just for fun.</p>
            <p>
             To get
            started, simply upload a portrait of yourself or your loved one and
            let our algorithms do the rest. Our system will create a stunning
            portraits that capture the essence and spirit of the subject.
          </p>
          </div>
          <div className="mt-6" id="price">
            <span className="text-gray-600"><span className="text-gray-900 text-4xl font-poppinsBold">Only $10 </span> / per Avatar</span>
            <div className="bg-success-50 rounded-2xl text-sm mt-3 w-[198px] px-3 py-1.5 text-success-700" id="badge">
              <p>Default Style Pack</p>
              <p>Included with 50 images</p> 
            </div>
          </div>
          <button
            className="block mt-3 text-sm bg-primary-600 w-40 hover:bg-primary-700 py-3 px-6 rounded-lg text-white font-poppinsBold"
          >
            Create Avatar
          </button>
        </div>
        <div className="lg:w-1/2 w-full md:p-20 p-10 md:flex relative h-auto lg:h-4/5" id="avatar-group">
          avatar
          {/* <div className="absolute w-[132px] h-[176px] top-0 left-12 overflow-hidden">
            <img alt="avatar" src={require('../../assets/img/3.png')} className=" rounded-full w-[176px] h-[176px]" />
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
