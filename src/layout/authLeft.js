import { LocalImg } from "../components/basic/imgProvider";

const LeftSide = () => {
  return (
    <div className="relative overflow-hidden py-10 md:flex flex-col w-1/2 bg-gradient-to-tr from-primary-900 to-primary-700 i justify-center hidden">
      <div className="ml-16 mb-8">
        <h1 className="text-white font-bold text-6xl font-poppinsSemiBold ">
          Mava
        </h1>
        <p className="text-white mt-1 text-xl">Avatars made fun!</p>
      </div>
      <div className="image-group flex-col w-[200%]">
        <div className="flex -ml-7">
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[15]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[2]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[3]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[14]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[8]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[12]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[17]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[4]} />
          </div>
        </div>
        <div className="flex mt-6 -ml-[128px]">
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[14]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[6]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[7]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[8]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[2]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[12]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[3]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[11]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[9]} />
          </div>
        </div>
        <div className="flex mt-6 -ml-7">
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[17]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[11]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[12]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[3]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[7]} />
          </div>
          <div className="mr-6 ">
            <img alt="gallery" src={LocalImg[2]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[14]} />
          </div>
          <div className="mr-6">
            <img alt="gallery" src={LocalImg[13]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
