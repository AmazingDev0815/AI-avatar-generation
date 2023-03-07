import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";
import { LocalImg } from "../basic/imgProvider";
import Video from "../../assets/video/landing_video.mp4";

const Landing = () => {
  const navigate = useNavigate();
  const payment = () => {
    navigate("/payment");
  };
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center w-full 2xl:px-64 lg:px-32 px-8 pt-16 xl:pb-60 pb-20 relative">
        {/* <img src={LocalImg.gradient_1} alt="background_gradient_1" className="absolute top-0 left-0 rotate-[36.64deg]" />
        <img src={LocalImg.gradient_2} alt="background_gradient_2" className="absolute -top-[100px] -left-[400px] rotate-[15deg] opacity-60" /> */}
        <div
          className="px-8 2xl:pb-64 xl:pb-48 pb-32 flex flex-col-reverse lg:flex-row justify-center items-center w-full"
          id="start"
        >
          <div
            className="flex-1 lg:mr-20 flex flex-col items-center lg:items-start"
            id="hero"
          >
            <div className="font-poppinsBold 2xl:text-[88px] xl:text-7xl sm:text-5xl text-3xl 2xl:leading-[90px] text-gray-900 lg:mb-6 mb-4 lg:mt-0 sm:mt-8 mt-4">
              Avatars{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                Made Fun!
              </span>
            </div>
            <p className="font-poppinsRegular text-gray-600 sm:text-2xl mb-8">
              Make fun avatar images for you or as a gift for your loved ones!
            </p>
            <button
              onClick={payment}
              className="block lg:text-lg sm:text-base text-sm bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174] py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-white font-poppinsSemiBold"
            >
              Create for only $9.99
            </button>
          </div>
          <div className="flex-1" id="image_group">
            <img src={LocalImg.Group} alt="Group" />
          </div>
        </div>
        <div
          className="flex flex-col px-8 2xl:pb-64 xl:pb-48 pb-32 w-full"
          id="offer"
        >
          <div className="text-center mt-8 lg:mt-0 font-poppinsBold xl:text-6xl md:text-4xl text-3xl text-gray-900 mb-6">
            You will{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
              receive
            </span>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center shadow-2xl xl:px-16 px-4 py-8 xl:gap-4 gap-2 rounded-2xl">
            <div className="flex flex-col text-center sm:w-1/3 w-2/3">
              <span className="xl:text-5xl lg:text-3xl text-2xl font-poppinsBold text-primary-600 mb-1">
                160+
              </span>
              <span className="sm:text-2xl font-poppinsRegular text-primary-900">
                Images Received
              </span>
            </div>
            <div className="sm:h-32 h-1 sm:w-1 w-full bg-primary-100"></div>
            <div className="flex flex-col text-center sm:w-1/3 w-2/3">
              <span className="xl:text-5xl lg:text-3xl text-2xl font-poppinsBold text-primary-600 mb-1">
                20+
              </span>
              <span className="sm:text-2xl font-poppinsRegular text-primary-900">
                Artistic Styles
              </span>
            </div>
            <div className="sm:h-32 h-1 sm:w-1 w-full bg-primary-100"></div>
            <div className="flex flex-col text-center sm:w-1/3 w-2/3">
              <span className="xl:text-5xl lg:text-3xl text-2xl font-poppinsBold text-primary-600 mb-1">
                2K
              </span>
              <span className="sm:text-2xl font-poppinsRegular text-primary-900">
                Image Resolution
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full items-center px-6 md:px-0 2xl:pb-64 xl:pb-48 pb-32"
          id="metrics"
        >
          <div className="flex flex-1 flex-col mr-6">
            <div className="flex flex-col mb-6">
              <div className="2xl:w-2/3 text-center md:text-start mt-6 md:mt-0 flex flex-col font-poppinsBold xl:text-6xl md:text-4xl xl:leading-[76px] text-3xl text-gray-900">
                <span>Perfect for you</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                  or as a gift!
                </span>
              </div>
            </div>
            <div className="font-poppinsRegular sm:text-2xl text-gray-600">
              Whether you want to create some fun images for social media, print
              out a cool gift for someone or just have fun, our powerful image
              generator has you covered.{" "}
            </div>
          </div>
          <div className="flex-1 py-14 flex justify-center">
            <video
              className="rounded-lg md:rounded-[30px] shadow-2xl"
              autoPlay
              loop
              muted
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className="w-full flex flex-col 2xl:pb-64 xl:pb-48 pb-32"
          id="example"
        >
          <div className="text-center font-poppinsBold xl:text-6xl md:text-4xl text-3xl text-gray-900 mb-8">
            Fine tuned{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
              styles
            </span>
          </div>
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-8">
            <div className="relative">
              <img
                src={LocalImg.Wizzard}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Wizzard
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Cartoon3D}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                3D Cartoon
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SuperheroMale}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Superhero
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.PrincessWarrior}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Princess Warrior
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Mercenary}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Mercenary
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Joker}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Joker
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Anime}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Anime
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Painting}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SuperheroFemale}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Superhero
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SpacePortrait}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Space Portrait
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.OilPainting}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Oil Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalPainting}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Digital Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Gothic}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Gothic
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Haunted3D}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                3D Haunted
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Pinup}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Pinup
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalDrawingFemale}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Digital Drawing
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.AcrylicPainting}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Acrylic Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Astronaut}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Astronaut
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Renaissance}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Renaissance
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalDrawingMale}
                alt="demo"
                className="rounded-lg md:rounded-[30px] 3xl:w-64 2xl:w-56 xl:w-48 md:w-40 sm:w-32 w-24 3xl:h-64 2xl:h-56 xl:h-48 md:h-40 sm:h-32 h-24"
              />
              <span className="font-poppinsBold sm:text-2xl text-white absolute sm:left-6 left-4 sm:bottom-[18px] bottom-2">
                Digital Drawing
              </span>
            </div>
          </div>
          <div className="text-center font-poppinsBold text-gray-900 xl:text-4xl md:text-2xl text-lg">
            And many more...
          </div>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center"
          id="bottom_hero"
        >
          <div className="w-full pb-8 flex flex-col text-center">
            <div className="font-poppinsBold xl:text-6xl md:text-4xl text-3xl text-gray-900 mb-6">
              Create your avatars{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                today!
              </span>
            </div>
            <div className="font-poppinsRegular sm:text-2xl text-gray-600">
              You just upload 20 portrait images and you’ll receive the avatars
              in 20 minutes tops!
            </div>
          </div>
          <button
            onClick={payment}
            className="block lg:text-lg lg:w-64 w-48 bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174] py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-white font-poppinsSemiBold"
          >
            Only $9.99
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
