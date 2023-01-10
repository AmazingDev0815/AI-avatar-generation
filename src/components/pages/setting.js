import { useState } from "react";
import MainLayout from "../../layout/mainLayout"

const Setting = () => {
  const [notification, setNotification] = useState(false);
  const [promotionalEmail, setPromotionalEmail] = useState(false);

  return (
    <MainLayout>
      <div className="flex flex-1 flex-col mb-40 px-20 w-full">
        <div className="rounded-3xl flex items-center w-full h-60"></div>
        <div className="mt-12 flex flex-col px-8" id="settingSection">
          <div className="flex pb-5 border-b">
            <div className="w-1/5 text-sm mr-8">
              <h1 className="font-poppinsMedium">Profile Information</h1>
              <span className="text-gray-400">Update your photo, username and preferences.</span>
            </div>
            <div className="w-4/5 px-6">
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
                <input
                  type="text"
                  id="email"
                  className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-6" id="upload"></div>
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
          <div className="flex"></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Setting