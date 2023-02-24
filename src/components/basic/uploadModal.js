import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LocalImg } from "./imgProvider";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function PreviewModal() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);

  const modalRef = useRef(null);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSkip = () => {
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={modalRef}
        onClose={() => {}}
        open={true}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              ref={modalRef}
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative p-6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-lg">
                <div className="bg-white pt-5 pb-4">
                  {images(step)}
                  <div className="flex items-start">{text(step)}</div>
                </div>
                <div className="flex justify-center items-center mt-4 h-3">
                  {step === 0 ? null : (
                    <div className="w-2/3 flex justify-between h-2">
                      <div
                        className={`${
                          step >= 1 ? "bg-primary-700" : "bg-gray-300"
                        } h-2 rounded-full mr-1 w-1/4`}
                      ></div>
                      <div
                        className={`${
                          step >= 2 ? "bg-primary-700" : "bg-gray-300"
                        } h-2 rounded-full mr-1 w-1/4 `}
                      ></div>
                      <div
                        className={`${
                          step >= 3 ? "bg-primary-700" : "bg-gray-300"
                        } h-2 rounded-full mr-1 w-1/4`}
                      ></div>
                      <div
                        className={`${
                          step >= 4 ? "bg-primary-700" : "bg-gray-300"
                        } h-2 rounded-full w-1/4`}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 py-3 flex justify-between items-center">
                  {step === 0 ? (
                    <button
                      type="button"
                      className="block w-full mr-3 border-gray-300 mt-6 py-2 rounded-lg text-gray-700 disabled:text-gray-300 border disabled:border-gray-200 font-poppinsSemiBold mb-2 text-sm sm:text-base"
                      onClick={() => handleSkip()}
                    >
                      Skip Guide
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="block w-full mr-3 border-gray-300 mt-6 py-2 rounded-lg text-gray-700 disabled:text-gray-300 border disabled:border-gray-200 font-poppinsSemiBold mb-2 text-sm sm:text-base"
                      onClick={() => handleBack()}
                      disabled={step > 1 ? false : true}
                    >
                      Back
                    </button>
                  )}

                  <button
                    type="button"
                    className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-poppinsSemiBold mb-2 text-sm sm:text-base"
                    onClick={() => {
                      step > 2 ? setOpen(false) : handleNext();
                    }}
                  >
                    {step === 0 ? "Start Guide" : "Next"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const images = (step) => {
  switch (step) {
    case 0:
      return (
        <div className="flex justify-center items-center">
          <img src={LocalImg.party} alt="Success" />
        </div>
      );
    case 1:
      return (
        <div className="px-1 flex flex-wrap gap-3 justify-center items-center">
          <img src={LocalImg.check01} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check02} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check03} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check04} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check05} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check06} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check07} alt="Bad" className="rounded-lg" />
          <img src={LocalImg.check08} alt="Bad" className="rounded-lg" />
        </div>
      );
    case 2:
      return (
        <div className="px-6 flex justify-center items-center">
          <div className="flex flex-1 relative mr-8">
            <img src={LocalImg.check1Good} alt="Good" className="rounded-lg" />
            <div className="flex justify-center items-center absolute bottom-3 left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-success-50 text-success-700">
              <CheckCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Good
              </span>
            </div>
          </div>
          <div className="flex flex-1 relative">
            <img src={LocalImg.check1Bad} alt="Bad" className="rounded-lg" />
            <div className="flex justify-center items-center absolute bottom-3 left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-red-50 text-red-700">
              <XCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Bad
              </span>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="px-6 flex justify-center items-center">
          <div className="flex flex-1 relative mr-8">
            <img src={LocalImg.check2Good} alt="Good" className="rounded-lg" />
            <div className="flex justify-center items-center absolute bottom-3 left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-success-50 text-success-700">
              <CheckCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Good
              </span>
            </div>
          </div>
          <div className="flex flex-1 relative">
            <img src={LocalImg.check2Bad} alt="Bad" className="rounded-lg" />
            <div className="flex justify-center items-center absolute bottom-3 left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-red-50 text-red-700">
              <XCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Bad
              </span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="px-4 sm:px-6 mt-10 flex justify-center items-center">
          <div className="flex flex-1 justify-end relative mr-6 sm:mr-8">
            <img
              src={LocalImg.check31Good}
              alt="Good"
              className="rounded-lg scale-75 sm:scale-100"
            />
            <img
              src={LocalImg.check32Good}
              alt="Good"
              className="absolute rounded-lg scale-75 sm:scale-100 -top-10 right-20 sm:right-28"
            />
            <div className="flex justify-center items-center absolute bottom-6 right-20 sm:bottom-3 sm:left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-success-50 text-success-700">
              <CheckCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Good
              </span>
            </div>
          </div>
          <div className="flex flex-1 relative">
            <img
              src={LocalImg.check31Bad}
              alt="Bad"
              className="rounded-lg scale-75 sm:scale-100"
            />
            <img
              src={LocalImg.check32Bad}
              alt="Bad"
              className="absolute scale-75 sm:scale-100 rounded-lg -top-10 left-20 sm:left-28"
            />
            <div className="flex justify-center items-center absolute bottom-6 left-6 sm:bottom-3 sm:left-3 p-1 sm:p-2 rounded sm:rounded-lg bg-red-50 text-red-700">
              <XCircleIcon className="w-3 h-3 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="font-poppinsSemiBold text-xs sm:text-sm">
                Bad
              </span>
            </div>
          </div>
        </div>
      );
  }
};

const text = (step) => {
  switch (step) {
    case 0:
      return (
        <div className="mt-16 text-center">
          <Dialog.Title
            as="h3"
            className="text-xl font-poppinsSemiBold leading-6 text-gray-900"
          >
            Payment successful!
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm font-poppinsRegular text-gray-500">
              If you haven’t used our service before we highly encourage you to
              go through the short guide. It only takes a couple of seconds.
            </p>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="mt-16 text-center">
          <Dialog.Title
            as="h3"
            className="text-xl font-poppinsSemiBold leading-6 text-gray-900"
          >
            Make sure you upload good images.
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm font-poppinsRegular text-gray-500">
              To create great images we need to get the best possible portraits
              from you. So take your time and follow the following steps.
            </p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="mt-16 text-center">
          <Dialog.Title
            as="h3"
            className="text-xl font-poppinsSemiBold leading-6 text-gray-900"
          >
            Only upload closeup portraits.
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm font-poppinsRegular text-gray-500">
              The closer you are to the camera, the better. Images taken from
              afar will produce bad results.
            </p>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="mt-8 sm:mt-16 text-center">
          <Dialog.Title
            as="h3"
            className="text-lg sm:text-xl font-poppinsSemiBold leading-6 text-gray-900"
          >
            Don’t hide your face!
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-xs sm:text-sm font-poppinsRegular text-gray-500">
              Make sure to not cover your face with a hat, sunglasses or even
              too much makeup!
            </p>
          </div>
        </div>
      );
    default:
      return (
        <div className="mt-16 text-center">
          <Dialog.Title
            as="h3"
            className="text-xl font-poppinsSemiBold leading-6 text-gray-900"
          >
            Different clothes and backgrounds.
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm font-poppinsRegular text-gray-500">
              Make sure you are wearing different clothes on the photos and that
              the background is different.
            </p>
          </div>
        </div>
      );
  }
};
