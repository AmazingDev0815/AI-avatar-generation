import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";

const Group = () => {
  const { id } = useParams();
  // console.log('group =========> ', id)

  const onDownload = () => {
    console.log('dwonload')
  }

  const onDelete = () => {
    console.log('delete')
  }
  
  return (
    <MainLayout>
      <div className="flex flex-col flex-1 w-full px-3 md:px-20 mt-16">
        <div className="text-sm flex items-center" id="route">
          <Link
            to="/my-avatars"
            className="font-poppinsMedium hover:text-primary-600 text-gray-600 mr-[18px]"
          >
            My Avatars
          </Link>
          <ChevronRightIcon className="text-gray-600 w-4 h-4 mr-[18px]" />
          <span className="font-poppinsBold text-primary-600">{id}</span>
        </div>
        <div className="flex justify-between items-center mt-3" id="download">
          <div className="flex flex-col">
            <h1 className="font-poppinsSemiBold text-3xl text-gray-900">
              {id}
            </h1>
            <span className="text-xs text-gray-500 mt-3">16.01.2023.</span>
          </div>
          <button className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center">
            <ArrowDownTrayIcon className="w-5 h-5 stroke-2 mr-2" />
            <span className="text-sm font-poppinsSemiBold" onClick={onDownload}>Download All</span>
          </button>
        </div>
        <div className="mt-8" id="style_1">
          <h1 className="text-2xl text-gray-900 font-poppinsSemiBold">Anime</h1>
          <div
            className="flex flex-wrap items-center justify-start"
            id="images"
          >
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-8" id="style_2">
          <h1 className="text-2xl text-gray-900 font-poppinsSemiBold">
            Acrylic painting
          </h1>
          <div
            className="flex flex-wrap items-center justify-start"
            id="images"
          >
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 pr-6 w-1/5">
              <img
                alt="demo"
                src={require("../../assets/img/demo.png")}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2.5 flex text-gray-700 border hover:bg-gray-200 border-gray-300 rounded-lg items-center my-8">
            <TrashIcon className="w-5 h-5 stroke-2 mr-2" />
            <span className="text-sm font-poppinsSemiBold" onClick={onDelete}>Delete Collection</span>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Group;
