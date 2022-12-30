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
        <div className="lg:w-1/2 w-full md:p-20 p-10 scale-[0.947] md:flex relative h-[500px] lg:h-4/5" id="avatar-group">
          <div className="absolute w-[127px] h-[176px] top-[0px] left-[170px] overflow-hidden rounded-full bg-center bg-[url('assets/img/15.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[26px] left-[304px] overflow-hidden rounded-full bg-center bg-[url('assets/img/8.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[114px] left-[438px] overflow-hidden rounded-full bg-center bg-[url('assets/img/2.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[292px] left-[438px] overflow-hidden rounded-full bg-center bg-[url('assets/img/3.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[382px] left-[304px] overflow-hidden rounded-full bg-center bg-[url('assets/img/12.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[358px] left-[170px] overflow-hidden rounded-full bg-center bg-[url('assets/img/11.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[266px] left-[42px] overflow-hidden rounded-full bg-center bg-[url('assets/img/17.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[88px] left-[42px] overflow-hidden rounded-full bg-center bg-[url('assets/img/6.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[178px] left-[166px] overflow-hidden rounded-full bg-center bg-[url('assets/img/7.png')]">
          </div>
          <div className="absolute w-[127px] h-[176px] top-[204px] left-[304px] overflow-hidden rounded-full bg-center bg-[url('assets/img/14.png')]">
          </div>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
