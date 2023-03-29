import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { useImageDialogContext } from "../../hooks/imageDialogContext";
import MainLayout from "../../layout/mainLayout";
import { getImageCollection } from "../../redux/product/product";
import ImageModal from "../basic/imageModal";
import MyModal from "../basic/modal";

const Group = () => {
  const { id } = useParams();
  const store = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const {props, setProps} = useImageDialogContext()
  
  const OpenModal = ({name, index}) => {
    setProps({open: true, name, index})
  }

  useEffect(() => {
    dispatch(getImageCollection(id));
  }, [dispatch, id]);

  return (
    <MainLayout>
      {store.selectedLoading ||
      store.productLoading ||
      Object.keys(store.selected).length === 0 ? (
        <div className="flex flex-1 justify-center items-center h-screen">
          <MoonLoader
            size={150}
            color="#7F56D9"
            loading={true}
            cssOverride={{}}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="flex flex-col flex-1 w-full px-3 md:px-20 mt-16">
          <div className="text-sm flex items-center" id="route">
            <Link
              to="/my-avatars"
              className="font-poppinsMedium hover:text-primary-600 text-gray-600 mr-[18px]"
            >
              My Avatars
            </Link>
            <ChevronRightIcon className="text-gray-600 w-4 h-4 mr-[18px]" />
            <span className="font-poppinsBold text-primary-600 min-w-0 truncate ">
              {store.selected.name}
            </span>
          </div>

          <div className="flex justify-between items-center mt-3" id="download">
            <div className="flex flex-col min-w-0">
              <h1 className="font-poppinsSemiBold text-2xl sm:text-3xl text-gray-900 truncate">
                {store.selected.name}
              </h1>
              <span className="text-xs text-gray-500 mt-3">
                <Moment format="DD.MM.YYYY.">
                  {store.selected.createdDate}
                </Moment>
              </span>
            </div>
            <div className="flex gap-2 flex-col lg:flex-row">
              <a
                href={`${process.env.REACT_APP_BASE_URL}image-collections/download/${id}`}
                className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
              >
                <ArrowDownTrayIcon className="w-5 h-5 stroke-2" />
                <span className="hidden xs:flex text-sm font-poppinsSemiBold ml-2 whitespace-nowrap">Download All</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jzkats7aqmw.typeform.com/to/loaM8eUY"
                className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
              >
                <StarIcon className="w-5 h-5 stroke-2" />
                <span className="hidden xs:flex text-sm font-poppinsSemiBold ml-2">Rate</span>
              </a>
            </div>
           
          </div>
          {store.selected?.groups.map((group, key) => (
            <div className="mt-16" id={`style_${key}`} key={key}>
              <h1 className="text-2xl text-gray-900 font-poppinsSemiBold">
                {group.name
                  .split(" ")
                  .filter(
                    (string) =>
                      !(
                        string.toLowerCase().includes("male") ||
                        string.toLowerCase().includes("female")
                      )
                  )
                  .join(" ")}
              </h1>
              <div
                className="flex flex-wrap items-center justify-start"
                id="images"
              >
                {group.images.map((item, index) => (
                  <div
                    key={index}
                    className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                  >
                    <img alt="demo" src={item.url.url} className="rounded-xl cursor-pointer" onClick={() => OpenModal({name: group.name, index})} />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <MyModal id={id} />
            <ImageModal />
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Group;
