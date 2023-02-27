import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";
import { LocalImg } from "../basic/imgProvider";

const Landing = () => {
  const navigate = useNavigate();
  const payment = () => {
    navigate("/payment");
  };
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center w-full px-64 pt-16 pb-60 relative">
        {/* <img src={LocalImg.gradient_1} alt="background_gradient_1" className="absolute top-0 left-0 rotate-[36.64deg]" />
        <img src={LocalImg.gradient_2} alt="background_gradient_2" className="absolute -top-[100px] -left-[400px] rotate-[15deg] opacity-60" /> */}
        <div
          className="px-8 pb-64 flex justify-center items-center w-full"
          id="start"
        >
          <div className="flex-1 mr-20" id="hero">
            <div className="font-poppinsBold text-[88px] leading-[90px] text-gray-900 mb-6">
              Avatars{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                Made Fun!
              </span>
            </div>
            <p className="font-poppinsRegular text-gray-600 text-2xl mb-8">
              Make fun avatar images for you or as a gift for your loved ones!
            </p>
            <button
              onClick={payment}
              className="block text-lg bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174] py-4 px-8 rounded-lg text-white font-poppinsSemiBold"
            >
              Create for only $9.99
            </button>
          </div>
          <div
            className="flex-1"
            id="image_group"
          ><img src={LocalImg.Group} alt="Group" /></div>
        </div>
        <div className="flex flex-col px-8 pb-64 w-full" id="offer">
          <div className="text-center font-poppinsBold text-6xl text-gray-900 mb-6">
            You will{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
              receive
            </span>
          </div>
          <div className="w-full flex justify-between items-center shadow-2xl px-16 py-8 gap-4 rounded-2xl">
            <div className="flex flex-col text-center w-1/3">
              <span className="text-5xl font-poppinsBold text-primary-600 mb-1">
                160+
              </span>
              <span className="text-2xl font-poppinsRegular text-primary-900">
                Images Received
              </span>
            </div>
            <div className="h-32 w-1 bg-primary-100"></div>
            <div className="flex flex-col text-center w-1/3">
              <span className="text-5xl font-poppinsBold text-primary-600 mb-1">
                20+
              </span>
              <span className="text-2xl font-poppinsRegular text-primary-900">
                Artistic Styles
              </span>
            </div>
            <div className="h-32 w-1 bg-primary-100"></div>
            <div className="flex flex-col text-center w-1/3">
              <span className="text-5xl font-poppinsBold text-primary-600 mb-1">
                2K
              </span>
              <span className="text-2xl font-poppinsRegular text-primary-900">
                Image Resolution
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center pb-64" id="metrics">
          <div className="flex flex-1 flex-col mr-6">
            <div className="flex flex-col mb-6">
              <div className="w-1/2 flex flex-col font-poppinsBold text-6xl text-gray-900">
                <span>Unique, Fun</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                  and fun!
                </span>
              </div>
            </div>
            <div className="font-poppinsRegular text-2xl text-gray-600">
              Whether you want to create some fun images for social media, print
              out a cool gift for someone or just have fun, our powerful image
              generator has you covered.{" "}
            </div>
          </div>
          <div className="flex-1 py-14 flex justify-center">
            <img
              src={LocalImg.DigitalDrawingFemale}
              alt="demo"
              className="rounded-[30px] shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full flex flex-col pb-64" id="example">
          <div className="text-center font-poppinsBold text-6xl text-gray-900 mb-8">
            Fine tuned{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
              styles
            </span>
          </div>
          <div className="flex justify-center flex-wrap gap-8 mb-8">
            <div className="relative">
              <img
                src={LocalImg.Wizzard}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Wizzard
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Cartoon3D}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                3D Cartoon
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SuperheroMale}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Superhero
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.PrincessWarrior}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Princess Warrior
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Mercenary}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Mercenary
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Joker}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Joker
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Anime}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Anime
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Painting}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SuperheroFemale}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Superhero
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.SpacePortrait}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Space Portrait
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.OilPainting}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Oil Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalPainting}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Digital Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Gothic}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Gothic
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Haunted3D}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                3D Haunted
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Pinup}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Pinup
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalDrawingFemale}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Digital Drawing
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.AcrylicPainting}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Acrylic Painting
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Astronaut}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Astronaut
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.Renaissance}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Renaissance
              </span>
            </div>
            <div className="relative">
              <img
                src={LocalImg.DigitalDrawingMale}
                alt="demo"
                className="rounded-[30px] w-64 h-64"
              />
              <span className="font-poppinsBold text-2xl text-white absolute left-6 bottom-[18px]">
                Digital Drawing
              </span>
            </div>
          </div>
          <div className="text-center font-poppinsBold text-gray-900 text-4xl">
            And many more...
          </div>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center"
          id="bottom_hero"
        >
          <div className="w-full pb-8 flex flex-col text-center">
            <div className="font-poppinsBold text-6xl text-gray-900 mb-6">
              Create your avatars{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174]">
                today!
              </span>
            </div>
            <div className="font-poppinsRegular text-2xl text-gray-600">
              Whether you want to create some fun images for social media, print
              out a cool gift for someone or just have fun, our powerful image
              generator has you covered.
            </div>
          </div>
          <button
            onClick={payment}
            className="block text-lg w-64 bg-gradient-to-r from-[#842EE5] via-[#E1338A] to-[#FBA174] py-4 px-8 rounded-lg text-white font-poppinsSemiBold"
          >
            Only $9.99
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
