import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAvatars, deleteCollection } from "../../redux/product/product";
import { deleteAccount } from "../../redux/user/user";

export default function MyModal({ obj, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const title =
    obj === "account"
      ? "Delete account"
      : obj === "image"
      ? "Delete images"
      : "Delete collection";
  const text =
    obj === "account"
      ? "Are you sure you want to delete your account? This action cannot be undone."
      : obj === "image"
      ? "Are you sure you want to delete generated images? This action cannot be undone."
      : "Are you sure you want to delete this collection? This action cannot be undone.";

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onDelete = () => {
    switch (obj) {
      case "account":
        dispatch(deleteAccount(store.userData.accessToken));
        break;
      case "image":
        dispatch(deleteAvatars());
        break;
      default:
        {
          dispatch(deleteCollection(id));
          navigate("/my-avatars");
        }
        break;
    }
    closeModal();
  };

  return (
    <>
      {obj === "account" ? (
        <button
          className="bg-primary-600 hover:bg-primary-700 font-poppinsSemiBold mt-2 w-36 rounded-lg px-4 py-2.5 text-white text-sm"
          onClick={openModal}
        >
          Delete Account
        </button>
      ) : obj === "image" ? (
        <button
          className="bg-primary-600 hover:bg-primary-700 font-poppinsSemiBold mt-2 w-36 rounded-lg px-4 py-2.5 text-white text-sm"
          onClick={openModal}
        >
          Delete Images
        </button>
      ) : (
        <button
          className="px-4 py-2.5 flex text-gray-700 border hover:bg-gray-200 border-gray-300 rounded-lg items-center my-8"
          onClick={openModal}
        >
          <TrashIcon className="w-5 h-5 stroke-2 mr-2" />
          <span className="text-sm font-poppinsSemiBold">
            Delete Collection
          </span>
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start mt-[10vh] justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button className="right-4 top-4 fixed" onClick={closeModal}>
                    <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-600" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex justify-center font-medium leading-6 text-gray-900"
                  >
                    <div className="bg-red-50 rounded-full p-2">
                      <div className="bg-red-100 rounded-full p-2">
                        <TrashIcon className="h-6 w-6 stroke-2 text-red-600" />
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-4 font-poppinsSemiBold text-lg text-gray-900 text-center">
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 text-center">
                    {text}
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button
                      className="w-1/2 mr-3 border rounded-lg py-2.5 hover:bg-gray-200 text-gray-700 font-poppinsSemiBold"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-1/2 border rounded-lg py-2.5 bg-red-600 hover:bg-red-700 text-white font-poppinsSemiBold"
                      onClick={onDelete}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
