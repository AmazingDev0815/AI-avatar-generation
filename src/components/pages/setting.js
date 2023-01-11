import { useCallback, useState } from "react";
import MainLayout from "../../layout/mainLayout"
import Dropzone from "../basic/dropZone";
import Avatar from "../basic/avatar";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Setting = () => {
  const [notification, setNotification] = useState(false);
  const [promotionalEmail, setPromotionalEmail] = useState(false);
  const [image, setImage] = useState();
  const [avatarState, setAvatarState] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
        setAvatarState(true)
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-1 flex-col mb-10 md:mb-40 md:px-20 px-3 w-full">
        <div className="rounded-3xl flex md:flex-row flex-col md:items-center justify-center md:justify-start w-full h-60 relative">
          <img alt="background" src={require('../../assets/img/settingHeader.png')} className="absolute h-60 rounded-3xl -z-10 object-cover" />
          <img alt="current avatar" src={require('../../assets/img/avatarPlaceholder(1).png')} className="rounded-full md:w-1/6 md:h-auto ml-6 w-20 h-20 md:scale-[0.8]"/>
          <div className="flex flex-col ml-6">
            <h1 className="text-3xl text-white">Vlatka Orcic</h1>
            <span className="text-white">vlatka.orcic@gmail.com</span>
          </div>
        </div>
        <div className="my-12 flex flex-col md:px-8" id="settingSection">
          <div className=" flex flex-col md:flex-row pb-5 border-b">
            <div className="md:w-1/5 w-full text-sm md:mr-8">
              <h1 className="font-poppinsMedium">Profile Information</h1>
              <span className="text-gray-400">Update your photo, username and preferences.</span>
            </div>
            <div className="md:w-4/5 w-full md:px-6 px-3 md:mt-0 mt-8">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="User Name"
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  Email address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-primary-600 absolute top-3 left-3"/>
                  <input
                    type="text"
                    id="email"
                    className="border pl-10 border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                    placeholder="Email Address"
                  />
                </div>
                
              </div>
              <div className="mt-6 flex flex-col md:flex-row" id="upload">
                <Avatar image={image} size="64px" state={avatarState} />
                <Dropzone onDrop={onDrop} accept={"image/*"} state={0}/>
              </div>
              <div className="mt-6 flex flex-col" id="setNotification">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notification}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setNotification(!notification);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-primary-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"
                    ></div>
                    <span className="ml-2 font-poppinsMedium text-gray-700">
                        Receive email notifications
                    </span>
                </label>
                <span className="ml-[52px] mt-1 text-gray-400 text-sm">We will send you emails when you’re avatars and packs are ready.</span>
             </div>
              <div className="mt-6 flex flex-col" id="setPromotionalEmail">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={promotionalEmail}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setPromotionalEmail(!promotionalEmail);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-primary-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"
                    ></div>
                    <span className="ml-2 font-poppinsMedium text-gray-700">
                      Receive promotional emails
                    </span>
                </label>
                <span className="ml-[52px] mt-1 text-gray-400 text-sm">We will send you personal offers and promotions and discounts.</span>
              </div>
              <div className="mt-6 mb-4 font-poppinsSemiBold" id="confirm">
                <button
                className="bg-primary-600 rounded-lg px-4 py-2.5 mt-6 mr-3 text-white text-sm"
                type="submit">
                  Save changes
                </button>
                <button
                className="border border-gray-300 rounded-lg px-4 py-2.5 mt-6 text-gray-900 text-sm"
                type="submit">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="md:w-1/5 text-sm md:mr-8">
              <h1 className="font-poppinsMedium">Account Control</h1>
              <span className="text-gray-400">Delete your images or terminate your account.</span>
            </div>
            <div className="md:w-4/5 px-3 md:px-6 mt-8 md:mt-0">
              <div className="flex flex-col" id="delete_image">
                <h1 className="font-poppinsMedium">Delete generated images</h1>
                <span className="text-gray-400">We will delete all of your generated images.</span>
                <button
                className="bg-primary-600 font-poppinsSemiBold mt-2 w-36 rounded-lg px-4 py-2.5 text-white text-sm"
                type="submit">
                  Delete Images
                </button>
              </div>
              <div className="flex flex-col mt-6" id="delete_account">
                <h1 className="font-poppinsMedium">Delete account</h1>
                <span className="text-gray-400">We will delete your account and delete all data.</span>
                <button
                className="bg-primary-600 font-poppinsSemiBold mt-2 w-36 rounded-lg px-4 py-2.5 text-white text-sm"
                type="submit">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Setting